import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Components/Widget/Widget";

const App = () => {
  const [formData, setFormData] = useState({
    heading: "",
    subheading: "",
    desc: "",
    main_btn_txt: "",
    share_btn_txt: "",
    descActive: false,
    main_btnActive: false,
    share_btnActive: false,
  });

  const [widgets, setWidgets] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWidgets([...widgets, formData]);
    setFormData({
      heading: "",
      subheading: "",
      desc: "",
      main_btn_txt: "",
      share_btn_txt: "",
      descActive: false,
      main_btnActive: false,
      share_btnActive: false,
    });
  };

  // console.log(widgets);
  // console.log(typeof widgets[0]);
  
  

  return (
    <div className="h-screen w-full flex flex-col">
      <header className="w-full bg-blue-600 text-white py-4 text-center text-xl font-bold">
        Widget Creator
      </header>

      <div className="flex h-full">
        <div className="w-1/3 p-4 bg-gray-100 border-r border-gray-300">
          <h2 className="text-lg font-bold mb-4">Create a Widget</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleInputChange}
              placeholder="Heading"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="subheading"
              value={formData.subheading}
              onChange={handleInputChange}
              placeholder="Subheading"
              className="p-2 border rounded"
              required
            />
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Description"
              className="p-2 border rounded"
            ></textarea>
            <input
              type="text"
              name="main_btn_txt"
              value={formData.main_btn_txt}
              onChange={handleInputChange}
              placeholder="Main Button Text"
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="share_btn_txt"
              value={formData.share_btn_txt}
              onChange={handleInputChange}
              placeholder="Share Button Text"
              className="p-2 border rounded"
            />
            <div className="flex gap-4">
              <label>
                <input
                  type="checkbox"
                  name="descActive"
                  checked={formData.descActive}
                  onChange={handleInputChange}
                />
                Show Description
              </label>
              <label>
                <input
                  type="checkbox"
                  name="main_btnActive"
                  checked={formData.main_btnActive}
                  onChange={handleInputChange}
                />
                Show Main Button
              </label>
              <label>
                <input
                  type="checkbox"
                  name="share_btnActive"
                  checked={formData.share_btnActive}
                  onChange={handleInputChange}
                />
                Show Share Button
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Create Widget
            </button>
          </form>
        </div>

        <div className="w-2/3 p-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-4">Widgets</h2>
          {widgets.length === 0 ? (
            <p className="text-gray-500">No widgets created yet.</p>
          ) : (
            widgets.map((widgetData, index) => (
              <Widget key={index} data={widgetData} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
