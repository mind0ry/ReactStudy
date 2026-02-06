// 1. 라이브러리 읽기
const express = require('express')

// 2. 서버 생성
const app = express()

// 3. cors => crossOrigin
const cors = require('cors')
app.use(cors())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// 4. 서버구동 => 1024~65535  => 8080/9090/4000/1521/1433/3306 제외
const server = app.listen(3355, () => {
    console.log('Server Start on http://localhost:3355')
})


const oracledb = require('oracledb') // 오라클 라이브러리
// ts => import oracledb from 'oracledb'
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

// Controller == request, response
app.get('/recipe/find', (req, res) => {
    recipeFind(req, res)
})

async function recipeFind(req, res) {
    // 검색어 받기
    // 페이지 받기 ==> || default
    let page = req.query.page || 1
    let fd = req.query.fd || '간식'
    let rowSize = 12
    let start = ((parseInt(page) - 1) * rowSize)

    // 오라클 연결
    let connection
    try {
        // getConnection()
        connection = await oracledb.getConnection({
            user: 'hr',
            password: 'happy',
            connectionString: '211.238.142.22/xe'
        })
        const result = await connection.execute(
            `SELECT no, poster, title
             FROM recipe2
             WHERE title LIKE '%${fd}%'
             ORDER BY no ASC
             OFFSET ${start} ROWS FETCH NEXT 12 ROWS ONLY`
        )
        console.log(result)

        const result2 = await connection.execute(
            `SELECT CEIL(COUNT(*) / 12.0) as totalpage
             FROM recipe2
             WHERE title LIKE '%${fd}%'`
        )
        console.log(result2)

        const data = {
            totalpage: result2.rows[0].TOTALPAGE,
            recipe: result.rows
        }
        res.json(data)  // 일반 => res.send()
        // => Spring-Boot / NodeJS (MSA)
        // AI => reactJS
    } catch (err) {
        console.log(err)
    } finally {
        // disConnection()
        try {
            if (connection) {
                await connection.close()
            }
        } catch (err) {
            console.log(err)
        }
    }
}