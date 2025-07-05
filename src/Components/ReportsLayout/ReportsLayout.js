import React, { useState } from 'react';
import './ReportsLayout.css';

// Sample data for past reports
const sampleReports = [
    { id: 1, doctorName: 'Dr. John Doe', specialty: 'Cardiology' },
    { id: 2, doctorName: 'Dr. Jane Smith', specialty: 'Dermatology' }
];

const ReportsLayout = () => {
    const [reports] = useState(sampleReports);

    const handleViewReport = (report) => {
        alert(`Viewing report for consultation with Dr. ${report.doctorName}.`);
    };

    const handleDownloadReport = (report) => {
        alert(`Downloading report for consultation with Dr. ${report.doctorName}.`);
    };

    return (
        <div className="reports-container">
            <h2>Reports</h2>
            <div className="reports-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>View Report</th>
                            <th>Download Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={report.id}>
                                <td>{index + 1}</td>
                                <td>{report.doctorName}</td>
                                <td>{report.specialty}</td>
                                <td>
                                    <button className="report-action-btn view-btn" onClick={() => handleViewReport(report)}>
                                        View Report
                                    </button>
                                </td>
                                <td>
                                    <button className="report-action-btn download-btn" onClick={() => handleDownloadReport(report)}>
                                        Download Report
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportsLayout;