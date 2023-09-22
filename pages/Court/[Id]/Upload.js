"use client";
import React, { useState } from "react";
import FileUpload from "../../../Components/FileUpload";

function Upload() {
  const [currentSection, setCurrentSection] = useState("caseInfo");
  const [caseName, setCaseName] = useState("");
  const [cnrNumber, setCnrNumber] = useState("");
  const [lohDate, setLohDate] = useState("");
  const [caseType, setCaseType] = useState("");
  const [nextHearingDate, setNextHearingDate] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [filingNumber, setFilingNumber] = useState("");
  const [filingDate, setFilingDate] = useState("");
  const [acts, setActs] = useState([]);
  const [newAct, setNewAct] = useState("");
  const [section, setSection] = useState([]);
  const [newSection, setNewSection] = useState("");
  const [mainCase, setMainCase] = useState("");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // try {
      //   const response = await fetch("YOUR_FILE_UPLOAD_API_ENDPOINT", {
      //     method: "POST",
      //     body: formData,
      //   });

      if (response.ok) {
        const encryptedData = "fcinvoengoeimngoemgoerm";

        // Make API call to store encrypted data in the database
        const responseDB = await fetch("api/CourtCase/createCase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: encryptedData,
            cnr: cnrNumber,
            // Add any additional data you want to send to the server
          }),
        });

        if (responseDB.ok) {
          console.log("Data stored in the database successfully!");
        } else {
          console.error("Error storing data in the database");
        }
      } else {
        console.error("Error uploading file");
      }
      // } catch (error) {
      //   console.error("Error uploading file:", error);
      // }
    } else {
      console.error("No file selected");
    }
  };

  // const handleAddSection = () => {
  //   if (newSection.trim() !== "") {
  //     setSection([...section, newSection]);
  //     setNewSection("");
  //   }
  // };

  // const handleRemoveSection = (e, index) => {
  //   e.preventDefault();
  //   const updatedActs = section.filter((_, i) => i !== index);
  //   setSection(updatedActs);
  // };

  // const handleAddAct = () => {
  //   if (newAct.trim() !== "") {
  //     setActs([...acts, newAct]);
  //     setNewAct("");
  //   }
  // };

  // const handleRemoveAct = (e, index) => {
  //   e.preventDefault();
  //   const updatedActs = acts.filter((_, i) => i !== index);
  //   setActs(updatedActs);
  // };

  // const handleSectionClick = (section) => {
  //   setCurrentSection(section);
  // };
  return (
    <div className="flex bg-gray-900 min-h-screen">
      <div className="w-1/4 p-8 mt-20 relative">
        <button
          className={`w-full py-3  text-white rounded-lg font-medium ${
            currentSection === 1
              ? "bg-primary-600"
              : "bg-primary-400 hover:bg-primary-500"
          }`}
          onClick={() => handleSectionClick(1)}
        >
          Section 1
        </button>
        {/* <div
          className={`absolute  transform -translate-x-1/2 bg-white h-24 w-2 z-0 ${
            currentSection === 1
              ? "bg-white"
              : "bg-green-500 shadow-xl  shadow-green-400 "
          }`}
          style={{ left: "50%" }}
        ></div> */}
        {/* <button
          className={`w-full py-3 mb-4 mt-24 text-white rounded-lg font-medium ${
            currentSection === 2
              ? "bg-primary-600"
              : "bg-primary-400 hover:bg-primary-500"
          }`}
          onClick={() => handleSectionClick(2)}
        >
          Section 2
        </button> */}
      </div>
      {currentSection == 1 && (
        <div className="w-3/4 bg-gray-900 p-8">
          <section className="bg-white dark:bg-gray-900">
            <section class="bg-white dark:bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Add a New Court Case
                </h2>
                <form action="#">
                  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    {/* <div class="sm:col-span-2">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CourtCase Name
                      </label>
                      <input
                        type="text"
                        value={caseName}
                        onChange={(e) => setCaseName(e.target.value)}
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Provide the Name of the Case"
                        required=""
                      />
                    </div> */}
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Case Number Record
                      </label>
                      <input
                        type="text"
                        value={cnrNumber}
                        onChange={(e) => setCnrNumber(e.target.value)}
                        name="cnrnumber"
                        id="cnrnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Case Number Record"
                        required=""
                      />
                    </div>

                    {/* <div class="w-full">
                      <label
                        for="LOHDate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Hearing Date
                      </label>
                      <input
                        type="date"
                        value={lohDate}
                        onChange={(e) => setLohDate(e.target.value)}
                        name="LOHDate"
                        id="LOHDate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div> */}
                    {/* <div>
                      <label
                        for="CaseType"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CaseType
                      </label>
                      <select
                        value={caseType}
                        onChange={(e) => setCaseType(e.target.value)}
                        id="CaseType"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select CaseType</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Civil">Civil</option>
                        {/* <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option> */}
                    {/* </select>
                    </div>  */}
                  </div>

                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                  <button
                    onClick={(e) => submitbutton()}
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Upload the Case
                  </button>
                </form>
              </div>
            </section>
          </section>
        </div>
      )}
      {currentSection == 2 && (
        <div className="w-3/4 bg-gray-900 p-8">
          <section className="bg-white dark:bg-gray-900">
            <section class="bg-white dark:bg-gray-900">
              <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Section 2 : Adding More Information
                </h2>
                <form action="#">
                  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ACTS
                      </label>
                      <input
                        type="text"
                        value={newAct}
                        onChange={(e) => setNewAct(e.target.value)}
                        name="cnrnumber"
                        id="cnrnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Case Number Record"
                      />
                      <button
                        onClick={() => handleAddAct()}
                        type="button"
                        class="inline-flex items-center px-5 py-2.5  sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      >
                        Add Act
                      </button>
                      <div>
                        <h2 className="text-lg p-1 text-white font-semibold mb-1">
                          List of Acts
                        </h2>
                        <ul className="list-disc pl-4">
                          {acts.map((act, index) => (
                            <li className="text-white p-1 mr-12 " key={index}>
                              {act}{" "}
                              <button
                                className=" text-blue-600 px-2 py-1 p-6 rounded"
                                onClick={(e) => handleRemoveAct(e, index)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Section
                      </label>
                      <input
                        type="text"
                        value={newSection}
                        onChange={(e) => setNewSection(e.target.value)}
                        name="cnrnumber"
                        id="cnrnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Case Number Record"
                      />
                      <button
                        onClick={() => handleAddSection()}
                        type="button"
                        class="inline-flex items-center px-5 py-2.5  sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                      >
                        Add Section
                      </button>
                      <div>
                        <h2 className="text-lg p-1 text-white font-semibold mb-1">
                          List of Sections
                        </h2>
                        <ul className="list-disc pl-4">
                          {section.map((sec, index) => (
                            <li className="text-white p-1 mr-12 " key={index}>
                              {sec}{" "}
                              <button
                                className=" text-blue-600 px-2 py-1 p-6 rounded"
                                onClick={(e) => handleRemoveSection(e, index)}
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="w-full">
                      <label
                        for="LOHDate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Main Case No
                      </label>
                      <input
                        type="date"
                        value={mainCase}
                        onChange={(e) => setMainCase(e.target.value)}
                        name="LOHDate"
                        id="LOHDate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    {/* <div>
                      <label
                        for="CaseType"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CaseType
                      </label>
                      <select
                        value={caseType}
                        onChange={(e) => setCaseType(e.target.value)}
                        id="CaseType"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select CaseType</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Civil">Civil</option>
                        {/* <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option> */}
                    {/* </select>
                    </div>*/}

                    <div>
                      <label
                        for="NextHearingDate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Next Hearing Date
                      </label>
                      <input
                        type="date"
                        name="NextHearingDate"
                        value={nextHearingDate}
                        onChange={(e) => setNextHearingDate(e.target.value)}
                        id="NextHearingDate"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Registration Number
                      </label>
                      <input
                        type="text"
                        name="filingnumber"
                        id="filingnumber"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Filing Record"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Registration Date
                      </label>
                      <input
                        type="date"
                        name="cnrnumber"
                        id="cnrnumber"
                        value={registrationDate}
                        onChange={(e) => setRegistrationDate(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Filing Date"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Filing Number
                      </label>
                      <input
                        type="text"
                        name="filingnumber"
                        value={filingNumber}
                        onChange={(e) => setFilingNumber(e.target.value)}
                        id="filingnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Filing Record"
                        required=""
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="cnrnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Filing Date
                      </label>
                      <input
                        type="date"
                        name="cnrnumber"
                        value={filingDate}
                        onChange={(e) => setFilingDate(e.target.value)}
                        id="cnrnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Filing Date"
                        required=""
                      />
                    </div>
                    <div class="sm:col-span-2"></div>
                  </div>

                  <button
                    onClick={(e) => setCurrentSection(currentSection + 1)}
                    type="button"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Next Section
                  </button>
                </form>
              </div>
            </section>
          </section>
        </div>
      )}
    </div>
    // <div className="bg-gray-900  min-h-screen ">
    //   {/* <FileUpload /> */}

    // </div>
  );
}

export default Upload;
