import React, { useEffect, useState } from 'react'
import FormInput from './FormInput';

const BmiCalulator = () => {
  const [heightUnit, setHeightUnit] = useState('m');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [unit, setUnit] = useState('Metric');
  const [count, setCount] = useState({
    data: {
      heightCount: '0',
      inchesCount: '0',
      weightCount: '0'
    }
  });

  const { heightCount, inchesCount, weightCount } = count.data;

  useEffect(() => {
  }, []);

  const onChangeInput = e => {
    const { name, value } = e.target;
    const { data } = count;
    setCount({
      data: {
        ...data,
        [name]: value
      }
    });
  };

  const onSelectTag = e => {
    setUnit(e.target.value);
    if (e.target.value === 'Metric') {
      setHeightUnit('m');
      setWeightUnit('kg');
    } else {
      setHeightUnit('ft');
      setWeightUnit('lbs');
    }
  };

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const bmi = weight / (height * height);
      console.log(bmi);
    }
  }

  const resetData = e => {
    e.preventDefault();

    setUnit('Metric');
    setCount({
      data: {
        heightCount: '0',
        inchesCount: '0',
        weightCount: '0'
      }
    });
    setHeightUnit('m');
    setWeightUnit('kg');
  }

  return (
    <>
      <div className='bmi-inputs'>
        <div className="inputs-fields">
          <div>
            <span className='label-unit'>Unit</span>
            <div className='unit'>
              <select name='unit' value={unit} onChange={onSelectTag} className='form-control form-control-sm'>
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput type='text' name='heightCount' title={`Height (${heightUnit})`} value={heightCount} onChange={onChangeInput} />
          {unit === 'Imperial' ? <FormInput type='text' name='inchesCount' title={`(in)`} value={inchesCount} onChange={onChangeInput} /> : ''}
          <FormInput type='text' name='weightCount' title={`Weight (${weightUnit})`} value={weightCount} onChange={onChangeInput} />
        </div>
        <button className='button' type='submit' onClick={resetData}>Reset</button>
      </div>
    </>
  )
}

export default BmiCalulator;
