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
  const [report, setReport] = useState({
    uid: 'anonymous',
    bar: id,
    report_type: null,
    comment: '',
  });

  useEffect(() => {
    if (user) {
      report.uid = user.uid;
    }
    getAllReportTypes().then(setReportTypes);
  }, [report, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/bars');
    postReport(report);
  };

  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <div className="m-auto training-style">
        <h2>SUBMIT A REPORT</h2>
        <div className="formContainer">
          <Form onSubmit={handleSubmit}>
            {
              (
                reportTypes.map((reportObject) => (
                  <Form.Check
                    variant="light"
                    name="report_type"
                    id="report_type"
                    onClick={handleChange}
                    type="radio"
                    label={reportObject.name}
                    value={reportObject.uuid}
                    className="text-light"
                    required
                  />
                ))
              )
            }
            <TextArea
              onChange={(e) => handleChange(e)}
              name="comment"
              label="Leave Comment"
              value={report.comment}
              required
            />
            <Button type="submit" buttonText="submit report" />
          </Form>
        </div>
      </div>
    </>
  );
}
