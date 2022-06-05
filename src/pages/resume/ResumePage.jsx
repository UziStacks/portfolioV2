import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import { BsArrow90DegDown } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';
import resume from '../../assets/Terel_Phillips_Resume_02-06-2022-11-49-38.pdf';
import styles from './ResumePage.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
  return (
    <section className={styles.resume_section}>
      <div className={`container ${styles.pageContainer}`}>
        <Link to="/" className={`btn btn-primary ${styles.home_button}`}>
          Back Home
        </Link>

        <div className={styles.resume__container}>
          {/* <div>
            <h1 className={styles.clickText}>
              Click me <HiCursorClick className={styles.clickIcon} />
            </h1>
            <BsArrow90DegDown className={styles.arrow} />
          </div> */}
          <div>
            <h2>Resume</h2>
            <a
              href="https://drive.google.com/file/d/1NwJ33BPAtgurSNBl9peMt1toVP3qLyYY/view"
              target="_blank"
              rel="noreferrer"
            >
              <Document
                file={resume}
                onLoadError={console.error}
                style={{ width: '100%', height: '100vh' }}
              >
                <Page pageIndex={0} />
              </Document>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
