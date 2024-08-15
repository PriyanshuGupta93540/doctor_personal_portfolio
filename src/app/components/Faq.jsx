import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "What could be causing consistent stomach pain?",
      content:
        "Consistent stomach pain can have various underlying causes, ranging from mild to serious. Bacterial, viral, or parasitic infections can lead to stomach pain, along with symptoms like diarrhea, nausea, vomiting, and fever.Acid reflux can cause a burning sensation in the upper abdomen or chest, often after eating or lying down. Open sores on the lining of the stomach or small intestine can lead to abdominal pain, often relieved temporarily by eating or taking antacids.A chronic disorder characterized by abdominal pain, bloating, and changes in bowel habits (diarrhea, constipation, or both).It's important to consult a general physician if you're experiencing persistent stomach pain. They can perform a thorough evaluation, diagnose the underlying cause, and recommend appropriate treatment based on your symptoms and medical history. Pre-book an appointment with Dr. Ritu Bhatnagar a general physician for online consultations or clinic visit, as convenient to you, by clicking on Book Appointment button on this website.",
    },
    {
      title: "What are the ways to manage severe asthma?",
      content:
        "Severe asthma often requires multiple medications. Long-term controllers like inhaled corticosteroids, long-acting beta-agonists, leukotriene modifiers, and biologics may be prescribed to reduce inflammation and control symptoms. Quick-relief medications like short-acting beta-agonists provide rapid relief during asthma attacks.Work with your healthcare provider to create a detailed asthma action plan. This plan outlines steps to take based on your symptoms, peak flow measurements, and medication use. Keep track of your symptoms, peak flow measurements, and medication use. This helps you and your doctor make informed decisions about your treatment. Identify and minimize exposure to asthma triggers such as allergens (pollen, dust mites, pet dander), pollutants, smoke, strong odors, and respiratory infections. Understand your asthma triggers, medications, and how to use inhalers and other devices correctly. Education empowers you to manage your condition effectively. Remember, severe asthma management is highly individualized. Work closely with your healthcare team to develop a tailored plan that addresses your specific needs and goals.Pre-book an appointment with Dr. Ritu Bhatnagar a general physician for online consultations or clinic visit, as convenient to you, by clicking on Book Appointment button on this website.",
    },
    {
      title:
        "What are the key factors that contribute to my blood sugar levels?",
      content:
        "Several key factors contribute to your blood sugar levels.The types and amounts of carbohydrates, proteins, and fats you consume can impact blood sugar levels.Exercise helps your body use glucose for energy, which can lower blood sugar levels. Insulin and other diabetes medications can influence blood sugar levels. Stress hormones can cause blood sugar levels to rise.Infections or other illnesses can trigger an increase in blood sugar. Hormonal changes, such as those related to the menstrual cycle, can impact blood sugar levels. Your body's ability to use insulin effectively affects blood sugar regulation.Being overweight or obese can contribute to insulin resistance and higher blood sugar levels. It's important to work with a general physician, such as an general physicianinologist or a diabetes educator, to manage and understand these factors for your specific situation.Pre-book an appointment with Dr. Ritu Bhatnagar a general physician for online consultations or clinic visit, as convenient to you, by clicking on Book Appointment button on this website.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl sm:mx-24 flex flex-col justify-center mx-8 lg:mx-48 my-8 shadow-xl">
      <div className="text-center space-y-1 bg-customTeal py-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <h1 className="text-lg leading-8 text-pausered font-medium">
          You ask we answer
        </h1>
      </div>
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 px-8 py-3">
          <button
            onClick={() => handleToggle(index)}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-customTeal">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 text-playred ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 flex text-justify">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
