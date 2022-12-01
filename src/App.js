import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import db from './components/firebase.js';
import { collection, doc, setDoc, getDocs, getDoc } from 'firebase/firestore';
import "bootstrap/dist/css/bootstrap.min.css";

// Import your components here
import CreateAccount from "./components/CreateAccount";
import FirstTimeLogin from "./components/FirstTimeLogin";
import WelcomePage from "./components/WelcomePage";
import ContactPage from "./components/Contact";
import AboutPage from "./components/About";
import HomePage from "./components/HomePage";
import RecipeDetails from "./components/RecipeDetails";
import SearchResults from "./components/SearchResultsPage";
import RecipeCreate from "./components/RecipeCreate.js";
import ParseR from "./components/Parse.js";
import Filter from "./components/Filter";
import ExerciseCreate from "./components/ExerciseCreate";
// Just added it here to test the mental health page
import MentalHealth from "./components/MentalHealth";
import JournalEntry from "./components/JournalEntry";


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [injury, setInjury] = useState([]);
  const [filters, setFilter] = useState([]);
  const [ingredient_names, set_ingredient_names] = useState([]);
  const [ingredients_to_avoid, set_ingredients_to_avoid] = useState([]);
  const [filter_check, setfilter_check] = useState(false);
  const [allergy_check, set_allergycheck] = useState(false);
  const [userID, setUserID] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    collectData();
    console.log(data);
  }, []);

  async function collectData() {
    // const RecipeDatabase = await getDocs(collection(db, "Recipes"));
    // let collection_array = [];
    // RecipeDatabase.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    //   // collection_array.push(doc.data());
    // });
    // setdata(collection_array);
    const recipes_list = doc(db, "Recipes", "RecipeArray");
    const recipe_snap = await getDoc(recipes_list);
    console.log(recipe_snap.data().Recipes);
    setdata(recipe_snap.data().Recipes);
  }

  if (userID != "") {
    return (
      <div>
        <Routes>
          {/* Add routes/your page components here  */}
          <Route path="/home">
            <Route index element={<Navigate to="/home/overview" replace />} />
            <Route
              path=":state"
              element={
                <HomePage
                  data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
                />
              }
            />
          </Route>
          <Route
            exact
            path="/"
            element={
              <WelcomePage
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route exact path="/About" element={<AboutPage />} />
          <Route exact path="/Contact" element={<ContactPage />} />
          <Route
            path="/CreateAccount"
            element={
              <CreateAccount
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/FirstTimeLogin"
            element={
              <FirstTimeLogin
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/LoginPage"
            element={
              <LoginPage
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/home/recipesearch/RecipeDetails/:state"
            element={
              <RecipeDetails
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/home/recipesearch/SearchResults"
            element={
              <SearchResults
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/RecipeCreate"
            element={
              <RecipeCreate
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path='/ExerciseCreate'
            element={
              <ExerciseCreate
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route path="/ParseR" element={<ParseR />} />
          <Route
            path="/MentalHealth"
            element={
              <MentalHealth
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/JournalEntry"
            element={
              <JournalEntry
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/home/Filter"
            element={
              <Filter
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          {/* Add routes/your page components here  */}
          <Route
            exact
            path="/"
            element={
              <WelcomePage
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route exact path="/About" element={<AboutPage />} />
          <Route exact path="/Contact" element={<ContactPage />} />
          <Route
            path='/ExerciseCreate'
            element={
              <ExerciseCreate
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/CreateAccount"
            element={
              <CreateAccount
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/FirstTimeLogin"
            element={
              <FirstTimeLogin
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
          <Route
            path="/LoginPage"
            element={
              <LoginPage
                data={data} setdata={setdata} filter_check={filter_check} setfilter_check={setfilter_check} allergy_check={allergy_check} set_allergycheck={set_allergycheck} ingredients_to_avoid={ingredients_to_avoid} set_ingredients_to_avoid={set_ingredients_to_avoid} ingredient_names={ingredient_names} set_ingredient_names={set_ingredient_names} filters={filters} setFilter={setFilter} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} age={age} setAge={setAge} gender={gender} setGender={setGender} weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} allergies={allergies} setAllergies={setAllergies} injury={injury} setInjury={setInjury} userID={userID} setUserID={setUserID}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
