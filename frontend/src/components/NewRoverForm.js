import React from 'react'


const NewRoverForm = ({ formData, handleChange, handleSubmit, buttonText }) => (
  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
      <div className="field">
        <label className="label">X</label>
        <div className="control">
          <input
            className="input"
            placeholder="X co-ordinate between 0-5"
            name="x"
            onChange={handleChange}
            value={formData.x}
          />
        </div>
        {/* {errors.name && <small className="help is-danger">{errors.name}</small>} */}
      </div>
      <div className="field">
        <label className="label">Y</label>
        <div className="control">
          <input
            className="input"
            placeholder="Y co-ordinate between 0-5"
            name="y"
            onChange={handleChange}
            value={formData.y}
          />
        </div>
        {/* {errors.type && <small className="help is-danger">{errors.type}</small>} */}
      </div>
      <div className="field">
        <label className="label">POSITION</label>
        <div className="control">
          <input
            className="input"
            placeholder="N / E / S / W /"
            name="position"
            onChange={handleChange}
            value={formData.position}
          />
        </div>
        {/* {errors.color && <small className="help is-danger">{errors.color}</small>} */}
      </div>

      <div className="field">
        <button type="submit" className="button is-fullwidth is-warning">{buttonText}</button>
      </div>
    </form>
  </div>
)

export default NewRoverForm