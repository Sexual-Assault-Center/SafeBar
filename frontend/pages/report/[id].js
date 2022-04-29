import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import HeadDetails from '../../components/HeadDetails';
import { getAllReportTypes, postReport } from '../../utils/api';

export default function Report() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const [reportTypes, setReportTypes] = useState([]);
  const [value, setValue] = useState('');
  const [report, setReport] = useState({
    uid: 'anonymous',
    bar: id,
    report_type: null,
    comment: '',
  });

  useEffect(() => {
    if (user) {
      report.uid = user.uid
    };
    getAllReportTypes().then(setReportTypes)
  }, [report, user]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setReport((prevState) => (
      {
        ...prevState,
        comment: value
      }
    ));
  };

  const handleClick = (e) => {
    setReport((prevState) => (
      {
        ...prevState,
        report_type: e.target.id,
      }
    ));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 ) {
      e.preventDefault();
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/bars');
    postReport(report);
  }

  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {reportTypes.map((report) => <Form.Check
          name='report-check'
          onClick={(e) => handleClick(e)}
          type="radio"
          label={report.name}
          id={report.uuid}
        />
        )}
        <TextArea onChange={(e) => handleChange(e)} value={value} />
        <Button type='submit' buttonText='report'/>
      </Form>
    </>
  );
};
