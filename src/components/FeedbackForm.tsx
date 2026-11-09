"use client";

import { useActionState } from "react";
import { submitFeedback } from "@/app/(site)/support/actions";
import { feedbackCategories, feedbackCopy, feedbackLimits } from "@/content/site";
import type { FeedbackErrors, FeedbackState, FeedbackValues } from "@/lib/feedback/core";

const initialState: FeedbackState = { status: "idle", attempt: 0 };
const emptyValues: FeedbackValues = { category: "", message: "", email: "" };

function describedBy(...ids: ReadonlyArray<string | false>): string | undefined {
  return ids.filter(Boolean).join(" ") || undefined;
}

function alertText(state: FeedbackState): string | undefined {
  if (state.status === "invalid") return feedbackCopy.invalidSummary;
  if (state.status === "rate_limited") return feedbackCopy.rateLimited;
  if (state.status === "unavailable") return feedbackCopy.unavailable;
  return undefined;
}

export function FeedbackForm() {
  const [state, formAction, pending] = useActionState(submitFeedback, initialState);
  const values = "values" in state ? state.values : emptyValues;
  const errors: FeedbackErrors = state.status === "invalid" ? state.errors : {};
  const alert = alertText(state);

  return (
    // 시도마다 다시 그려 서버가 돌려준 입력값을 복원한다.
    <form key={state.attempt} className="feedback-form" action={formAction} noValidate>
      <div className="field">
        <label htmlFor="feedback-category">{feedbackCopy.categoryLabel}</label>
        <select
          id="feedback-category"
          name="category"
          defaultValue={values.category}
          required
          autoFocus={Boolean(errors.category)}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={describedBy(Boolean(errors.category) && "feedback-category-error")}
        >
          <option value="" disabled>
            {feedbackCopy.categoryPlaceholder}
          </option>
          {feedbackCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p id="feedback-category-error" className="field-error">
            {errors.category}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="feedback-message">{feedbackCopy.messageLabel}</label>
        <textarea
          id="feedback-message"
          name="message"
          rows={6}
          defaultValue={values.message}
          required
          minLength={feedbackLimits.messageMin}
          maxLength={feedbackLimits.messageMax}
          autoFocus={!errors.category && Boolean(errors.message)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("feedback-message-help", Boolean(errors.message) && "feedback-message-error")}
        />
        <p id="feedback-message-help" className="field-help">
          {feedbackCopy.messageHelp}
        </p>
        {errors.message && (
          <p id="feedback-message-error" className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="feedback-email">{feedbackCopy.emailLabel}</label>
        <input
          id="feedback-email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={values.email}
          maxLength={feedbackLimits.emailMax}
          autoFocus={!errors.category && !errors.message && Boolean(errors.email)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("feedback-email-help", Boolean(errors.email) && "feedback-email-error")}
        />
        <p id="feedback-email-help" className="field-help">
          {feedbackCopy.emailHelp}
        </p>
        {errors.email && (
          <p id="feedback-email-error" className="field-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field-trap" aria-hidden="true">
        <label htmlFor="feedback-website">웹사이트</label>
        <input id="feedback-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {alert && (
        <p className="form-message" role="alert">
          {alert}
        </p>
      )}
      {state.status === "success" && (
        <p className="form-message" role="status">
          {feedbackCopy.success}
        </p>
      )}

      <button className="pill pill-primary" type="submit" disabled={pending}>
        {pending ? feedbackCopy.pending : feedbackCopy.submit}
      </button>
    </form>
  );
}
