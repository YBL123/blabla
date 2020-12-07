import React from 'react'


const RoverForm = ({ formData, errors, handleChange, handleSubmit, buttonText }) => (
  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
      <div className="field">
        <label className="label">X</label>
        <div className="control">
          <input
            className="input"
            placeholder="X coordinate between 0-5"
            name="x"
            onChange={handleChange}
            value={formData.x}
          />
        </div>
        {errors.x !== '' ? <small className="error-message">{errors.x}</small> : null }
      </div>
      <div className="field">
        <label className="label">Y</label>
        <div className="control">
          <input
            className="input"
            placeholder="Y coordinate between 0-5"
            name="y"
            onChange={handleChange}
            value={formData.y}
          />
        </div>
        {errors.y !== '' ? <small className="error-message">{errors.y}</small> : null }
      </div>
      <div className="field">
        <label className="label">Position</label>
        <div className="control">
          <input
            className="input input-position"
            placeholder="N,  E,  S,  W "
            name="position"
            onChange={handleChange}
            value={formData.position}
          />
        </div>
        {errors.position !== '' ? <small className="error-message">{errors.position}</small> : null }
      </div>

      <div className="deploy-rover-button-wrap">
        <button type="submit" className="deploy-rover-button">{buttonText}</button>
      </div>
    </form>
  </div>
)

export default RoverForm