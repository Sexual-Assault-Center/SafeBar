/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import HeadDetails from '../../components/HeadDetails';
import { getRequest, postRequest } from '../../utils/api';

export default function Report() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [bar, setBar] = useState('');
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
    } else {
      report.uid = 'anonymous';
    }
  }, [user]);

  useEffect(() => {
    getRequest('reporttypes/positive').then(setReportTypes);
    // Get single bar and interpolate
    getRequest(`bars/${id}`).then(setBar);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hard coded report type. Change if more positive reasons are created.
    report.report_type = reportTypes.find(
      (reportType) => reportType.name === 'Commend',
    ).uuid;
    router.push('/bars');
    postRequest('bar-report', report);
  };

  return (
    <>
      <HeadDetails
        title="Resources"
        description="Making Nightlife Safer for Everyone"
      />
      <div className="m-auto training-style">
        <h2>COMMEND A BAR</h2>
        <p className="report-sub">
          Did you have an awesome and safe experience at{' '}
          <span className="bar-name">{bar.name}</span>? Submit a commend to the
          Sexual Assault Center and let us know. The information you provide is
          important to building a safer community and will always be anonymous.
        </p>
        <div className="formContainer">
          <Form onSubmit={handleSubmit}>
            {/* <p>Select an option that best fits your experience:</p>
            <div className="report-radios">
              {reportTypes.map((reportObject) => (
                <Form.Check
                  variant="light"
                  name="report_type"
                  id="report_type"
                  onClick={handleChange}
                  type="radio"
                  label={reportObject.name}
                  value={reportObject.uuid}
                  key={reportObject.uuid}
                  className="text-light"
                  required
                />
              ))}
            </div> */}
            <TextArea
              onChange={(e) => handleChange(e)}
              name="comment"
              label="Tell us more"
              value={report.comment}
              required
            />
            <div className="charCounter">
              {report.comment.length || 0} / 500
            </div>
            <Button type="submit" buttonText="submit Commendation" />
            <Button
              type="button"
              buttonText="Cancel"
              onClick={() => router.push('/bars')}
              className="mx-3"
            />
          </Form>
        </div>
      </div>
    </>
  );
}
