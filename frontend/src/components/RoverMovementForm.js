import React from 'react'

const RoverMovementForm = ({ formData, errors, handleChange, handleSubmit, buttonText }) => (

  <div className="columns">
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
      <div className="field">
        <label className="label">Movement</label>
        <div className="control">
          <input
            className="input input-movement"
            placeholder="L, R, M"
            name="movement"
            onChange={handleChange}
            value={formData}
          />
        </div>
        {errors.movement !== '' ? <small className="error-message">{errors.movement}</small> : null }
      </div>

      <div className="move-rover-button-wrap">
        <button type="submit" className="move-rover-button">{buttonText}</button>
      </div>
    </form>
  </div>

)

export default RoverMovementForm
