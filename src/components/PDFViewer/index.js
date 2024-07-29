import './index.scss'
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFViewer = ({ file }) => {
    return (
        <div style={{ height: '600px', width: '100%' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                <Viewer fileUrl={file} />
            </Worker>
        </div>
    );
};

export default PDFViewer;
