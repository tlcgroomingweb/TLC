"use client";

import { useRef } from "react";
import styles from "./appointment-policy-dialog.module.css";

export function AppointmentPolicyDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button className={styles.trigger} type="button" onClick={openDialog}>
        appointment policies
      </button>

      <dialog
        aria-describedby="appointment-policy-description"
        aria-labelledby="appointment-policy-title"
        className={styles.dialog}
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        <div className={styles.card}>
          <button
            aria-label="Close appointment policies"
            className={styles.closeButton}
            type="button"
            onClick={closeDialog}
          >
            ×
          </button>

          <span className={styles.kicker}>Appointment policies</span>
          <h2 id="appointment-policy-title">Late Arrivals &amp; No-Shows</h2>
          <p
            className={styles.policyText}
            id="appointment-policy-description"
          >
            To help us stay on schedule, a <strong>$15 late fee</strong> may
            apply to late arrivals, and a <strong>$50 fee</strong> may apply to
            missed appointments.
          </p>
          <p className={styles.supportingText}>
            We understand plans can change. Please give us as much notice as
            possible if you need to cancel or reschedule.
          </p>

          <button
            className={styles.acknowledgeButton}
            type="button"
            onClick={closeDialog}
          >
            I understand
          </button>
        </div>
      </dialog>
    </>
  );
}
