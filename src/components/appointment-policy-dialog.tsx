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
          <h2 id="appointment-policy-title">Late &amp; No-Show Policy</h2>
          <p
            className={styles.policyText}
            id="appointment-policy-description"
          >
            <strong>$50 no-show fee</strong> and{" "}
            <strong>$10 late fee</strong> may apply to grooming services.
          </p>
          <p className={styles.supportingText}>
            We appreciate as much notice as possible when plans change.
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
