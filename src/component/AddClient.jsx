import { CheckCircleFilled} from '@ant-design/icons';
import { Steps } from 'antd';
import React, { useState } from 'react';
import CreateProfile from './CreateProfile';

import './antfile.css'
import PaymentSetup from './PaymentSetup';
import ThemeSetup from './ThemeSetup';
import ModulesSetup from './ModulesSetup';
import Success from './Success';

const { Step } = Steps;



const AddClient = ({setClient}) => {
  const [current, setCurrent] = useState(0);
  const [stepStyle1, setStepStyle1] = useState({fontSize: 35, color: '#51bb0e', display: 'none'})
  const [stepStyle2, setStepStyle2] = useState({fontSize: 35, color: '#51bb0e', display: 'none'})
  const [stepStyle3, setStepStyle3] = useState({fontSize: 35, color: '#51bb0e', display: 'none'})
  const [stepStyle4, setStepStyle4] = useState({fontSize: 35, color: '#51bb0e', display: 'none'})

  return (
    <>
    {current === 4 ? <Success />
    :
    <>
      <Steps
        type="navigation"
        current={current}
        // onChange={onChange}
        className="site-navigation-steps"
      >
        <Step title="Create Profile" icon={<CheckCircleFilled style={stepStyle1}/>} />
        <Step  title="Payment Setup" icon={<CheckCircleFilled style={stepStyle2}/>} />
        <Step  title="Theme Setup" icon={<CheckCircleFilled style={stepStyle3}/>} />
        <Step  title="Modules Setup" icon={<CheckCircleFilled style={stepStyle4}/>}/>
      </Steps>
      {(current=== 0) ?
      <CreateProfile setCurrent={setCurrent} setStepStyle1={setStepStyle1} setClient={setClient}/>
      : (current=== 1) ? 
      <PaymentSetup setCurrent={setCurrent} setStepStyle2={setStepStyle2} setClient={setClient}/>
      : (current=== 2) ?
      <ThemeSetup setCurrent={setCurrent} setStepStyle3={setStepStyle3} setClient={setClient}/>
      : <ModulesSetup setCurrent={setCurrent} setStepStyle4={setStepStyle4} setClient={setClient}/>
      }
      </>
    }
    </>
  );
};

export default AddClient;