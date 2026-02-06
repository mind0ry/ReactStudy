import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
/*
    관리 = 출력화면을 찾는다
           Router
              |
           화면 모음 : Routes => Switch
              |
           화면 1개 : Route
 */
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import FoodDetail from "./components/food/FoodDetail";
import RecipeList from "./components/recipe/RecipeList";
import RecipeDetail from "./components/recipe/RecipeDetail";
import FoodFind from "./components/food/FoodFind";
/*
    1. typescript
    2. nodejs
    3. jpa
    4. mysql
 */
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food/detail/:fno" element={<FoodDetail/>} />
        <Route path="/recipe/list" element={<RecipeList/>} />
        <Route path="/recipe/detail/:no" element={<RecipeDetail/>} />
        <Route path="/food/find" element={<FoodFind/>} />
      </Routes>
    </Router>
  );
}

export default App;
