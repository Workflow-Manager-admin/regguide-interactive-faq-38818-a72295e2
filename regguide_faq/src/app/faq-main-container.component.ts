import { Component } from '@angular/core';

/**
 * Main Container for RegGuide Interactive FAQ
 * - Guides users through registration scenarios with a step-by-step Q&A UI
 * - Dynamically reveals related FAQ, document checklist, and issued summary
 * - Applies specified theme, colors, and enforces mobile-friendliness.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-faq-main-container',
  templateUrl: './faq-main-container.component.html',
  styleUrls: ['./faq-main-container.component.css'],
  standalone: true,
})
export class FaqMainContainerComponent {
  // Welcoming prompt/message
  welcomeTitle = 'Welcome to RegGuide: Interactive FAQ for Company Registration';
  welcomeSubtitle = 'Let’s help you determine exactly what you need for your business registration in a few guided steps.';
  // Progress indicator state (out of 3 steps for illustration)
  currentStep = 1;
  steps = [
    { label: 'Start', done: true },
    { label: 'Questions', done: false },
    { label: 'Summary', done: false },
  ];
  // Main query for initial step (placeholder, can be advanced in logic later)
  questionText = 'What type of business or company do you want to register?';

  // Placeholders for step control (can be refactored with service/routing)
  faqs: string[] = []; // list of FAQ content populated after questions
  checklistDocs: string[] = []; // list of doc checklist after scenario determined
  summaryReady = false;

  // Example method to handle progressing steps
  // PUBLIC_INTERFACE
  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.steps[this.currentStep].done = true;
      this.currentStep += 1;
    }
    if (this.currentStep === this.steps.length) {
      this.summaryReady = true;
    }
  }
}
