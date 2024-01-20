import React from 'react';
import { useState } from 'react';
import './send.module.css';
import axios from 'axios';
const SendCallForm = () => {
 
  const [voiceSpeed, setVoiceSpeed] = useState(1);

  // State for the interruption threshold slider
  const [interruptionThreshold, setInterruptionThreshold] = useState(50);

  // State for the selected task
  const [selectedTask, setSelectedTask] = useState('');

  // Handler for the voice speed slider
  const handleVoiceSpeedChange = (event) => {
    setVoiceSpeed(event.target.value);
  };

  // Handler for the interruption threshold slider
  const handleInterruptionThresholdChange = (event) => {
    setInterruptionThreshold(event.target.value);
  };

  // Handler for selecting a task
  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  }
  // State to store form data
  const [formData, setFormData] = useState({
    phoneNumber: '555-555-5555',
    language: 'English',
    voice: 'Sophie (Australian)',
    voiceSpeed: 1,
    interruptionThreshold: 50,
    task: '',
    reduceLatency: false,
    parameters: [{ key: '', value: '' }],
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form data, e.g., making an API request
    console.log('Form submitted:', formData);
  };

  // Event handler for updating form data
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Event handler for adding parameters
  const addParameter = () => {
    setFormData((prevData) => ({
      ...prevData,
      parameters: [...prevData.parameters, { key: '', value: '' }],
    }));
  };

  // Event handler for removing parameters
  const removeParameter = (index) => {
    setFormData((prevData) => {
      const updatedParameters = [...prevData.parameters];
      updatedParameters.splice(index, 1);
      return {
        ...prevData,
        parameters: updatedParameters,
      };
    });
  };

  // Event handler for updating parameter data
  function handleParameterChange(index, field, value) {
    setFormData((prevData) => {
      const updatedParameters = [...prevData.parameters];
      updatedParameters[index][field] = value;
      return {
        ...prevData,
        parameters: updatedParameters,
      };
    });

  }
  
  const handleSumit = async (e) => {
    e.preventDefault();
  
    // Assuming your headers and data are already defined
    const headers = {
      authorization: "sk-m265t82luch5ycvuyui918xwnxlj0y93hsyvbliqlv4dl3jju2a2v2rc0wynh53u69",
    };
  
    const data = {
      phone_number: formData.phoneNumber,
      task: selectedTask, // Assuming you want to use the selected task
      voice_id: 0, // You may need to adjust this based on your requirements
      // Add other data fields as needed
    };
  
    try {
      // Make the API request
      const response = await axios.post("https://api.bland.ai/v1/calls", data, { headers });
  
      // Handle the response as needed
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('API Request Error:', error);
    }
}
  return (
    <div style={{ maxWidth: '600px', margin: 'auto',display: 'block', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Send a Phone Call</h1>
      <form onSubmit={handleSumit}>
        {/* Example: Phone Number */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="phoneNumber" style={{ display: 'flex', marginBottom: '5px' }}>Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
          />
        </div>
  
        {/* Example: Language */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="language" style={{ display: 'flex', marginBottom: '5px' }}>Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
          >
            {/* Add your language options here */}
            <option value="english">English</option>
            {/* Add more options as needed */}
          </select>
        </div>
  


        {/* Example: Voice */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="voice" style={{ display: 'flex', marginBottom: '5px' }}>Voice</label>
          <select
            id="voice"
            name="voice"
            value={formData.voice}
            onChange={handleChange}
            style={{ width: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}
          >
            {/* Add your voice options here */}
            <option value="sophie">Sophie (Australian)</option>
            {/* Add more options as needed */}
          </select>
        </div>
    
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Voice Speed
        </label>
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="voice-speed"
          value={voiceSpeed}
          onChange={handleVoiceSpeedChange}
        />
        <p>Selected Value: {voiceSpeed}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Interruption Threshold (in ms)
        </label>
        <input
          type="range"
          min="1"
          max="100"
          className="slider"
          id="interruption-threshold"
          value={interruptionThreshold}
          onChange={handleInterruptionThresholdChange}
        />
        <p>Selected Value: {interruptionThreshold}</p>
      </div>
 
       


        <div className="align-left">Reduce latency</div>
<div className="text-sm mb-4 overflow-hidden whitespace-nowrap inline-block align-left">
  Responds faster, in some cases has lower audio quality. Must be "Yes" for Voice Clones.
</div>

<div>

  <div className="flex">
    <button className="custom-button yes-button">
      Yes
    </button>
    <button className="custom-button no-button">
      No
    </button>
  </div>
</div>

<div>     
<div className="mb-4">
  <label></label>
        <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="task">
          Task (prompting guide)
        </label>
</div>   <div className="flex flex-wrap -m-2">
          <div className="p-2">
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Telehealth
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Small Business
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Stadium Venues
            </button>
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Inbound Sales
            </button>
          </div>
          {/* ... repeat for other tasks ... */}
        </div>
      </div>                    
              {/* Example: Parameters */}
        <div style={{ marginBottom: '10px' }}>
          <label></label>
          <label style={{ display: 'flex', marginBottom: '10px' }}>
            Parameters</label>
            <label style={{ display: 'inline-block', marginBottom: '10px' }}>
  Parameters are key pieces of information you want your agent to know and never forget. For example, a key could be "reservation_time" and its corresponding value could be "8pm on August 21, 2023".
</label>

 
          {formData.parameters.map((param, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <input
                type="text"
                placeholder="Key"
                value={param.key}
                onChange={(e) => handleParameterChange(index, 'key', e.target.value)}
                style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginRight: '10px' }}
              />
              <input
                type="text"
                placeholder="Value"
                value={param.value}
                onChange={(e) => handleParameterChange(index, 'value', e.target.value)}
                style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginRight: '10px' }}
              />
              <button type="button" onClick={() => removeParameter(index)} style={{ background: 'black', color:'white', padding: '10px', borderRadius: '5px' }}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addParameter} style={{ background: 'black', color: '#fff', padding: '10px', borderRadius: '5px' }}>
            Add Parameter
          </button>
        </div>
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px' }}>
          </div>
      {/* Temperature Slider */}
     
        <button type="submit" style={{ align:'Left',background: 'black', color: '#fff', padding: '15px', borderRadius: '5px', cursor: 'pointer' }}>
          Send call
        </button>
      </form>
    </div>



  );
         
        }
        
export default SendCallForm;
