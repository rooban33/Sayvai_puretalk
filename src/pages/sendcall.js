import React from 'react';
import { useState } from 'react';
import './send.css';
import axios from 'axios';

const SendCallForm = () => {
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [interruptionThreshold, setInterruptionThreshold] = useState(50);
  const [selectedTask, setSelectedTask] = useState('');

  const handleVoiceSpeedChange = (event) => {
    setVoiceSpeed(event.target.value);
  };

  const handleInterruptionThresholdChange = (event) => {
    setInterruptionThreshold(event.target.value);
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      authorization: "sk-m265t82luch5ycvuyui918xwnxlj0y93hsyvbliqlv4dl3jju2a2v2rc0wynh53u69",
      'Content-Type': 'application/json',
    };

    const data = {
      phone_number: formData.phoneNumber,
      task: formData.selectedTask,
      voice_id: 0,
      reduce_latency: formData.reduceLatency,
      amd: true,
      webhook: "YOUR-WEBHOOK-HERE", // Replace with your actual webhook URL
      request_data: {
        // Add your request_data parameters here
        calling: "Fantastic Airlines",
        bag_claim: "69683",
        airline_code: "UA123",
      },
      dynamic_data: formData.parameters.map(param => ({
        [param.key]: param.value,
      })),
      interruption_threshold: interruptionThreshold,
      voice_speed: voiceSpeed,
      // Add other data fields as needed
    };

    try {
      const response = await axios.post("https://api.bland.ai/v1/calls", data, { headers });
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Request Error:', error);
    }

    // Print form data
    console.log('Form Data:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const addParameter = () => {
    setFormData((prevData) => ({
      ...prevData,
      parameters: [...prevData.parameters, { key: '', value: '' }],
    }));
  };

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

  const handleParameterChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedParameters = [...prevData.parameters];
      updatedParameters[index][field] = value;
      return {
        ...prevData,
        parameters: updatedParameters,
      };
    });
  };

  return (
    <div className="sendcalll-styles">
    <div style={{ maxWidth: '600px', margin: 'auto',display: 'block', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Send a Phone Call</h1>
      <form onSubmit={handleSubmit}>
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
            &nbsp;
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Small Business
            </button>
            &nbsp;
            <button
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ${
                selectedTask === 'Telehealth' ? 'selected' : ''
              }`}
              onClick={() => handleTaskSelect('Telehealth')}
            >
              Stadium Venues
            </button>
            &nbsp;
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


    </div>
  );
         
        }
        
export default SendCallForm;