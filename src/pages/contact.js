export function contactPage() {
  // Create a heading for the contact page
  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";

  // Create a paragraph with contact information
  const paragraph = document.createElement("p");
  paragraph.textContent = "We'd love to hear from you!";

  // Create a form for users to fill out
  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.required = true;

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.required = true;

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  const messageTextarea = document.createElement("textarea");
  messageTextarea.name = "message";
  messageTextarea.required = true;

  // Create a submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send Message";

  // Append all elements to the form
  form.append(nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageTextarea, submitButton);

  // Append everything to the content div
  const content = document.querySelector("#content");
  content.append(heading, paragraph, form);
}
