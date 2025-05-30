import React from 'react'
import FormInput from './FormInput';

const BmiCalulator = () => {
  return (
    <>
      <div className='bmi-inputs'>
        <div className="inputs-fields">
          <div>
            <span className='label-unit'>Unit</span>
            <div className='unit'>
              <select name='unit' value='' className='form-control form-control-sm'>
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput type='text' name='heightCount' title={`Height (cm)`} value='' onChange={onChange} />
        </div>
        <button className='button' type='submit'>Reset</button>
      </div>
    </>
  )
}

export default BmiCalulator;
