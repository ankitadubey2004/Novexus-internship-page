// document.getElementById('applicationForm').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const formData = {
//     name: this.name.value,
//     email: this.email.value,
//     phone: this.phone.value,
//     githubOrLinkedIn: this.githubOrLinkedIn.value,
//     resumeUrl: this.resumeUrl.value,
//   };

//   try {
//     const response = await fetch('http://localhost:5000/api/apply', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });

//     if (response.ok) {
//       document.getElementById('confirmationMsg').style.display = 'block';
//       this.reset();
//     } else {
//       alert('❌ Submission failed. Please try again.');
//     }
//   } catch (err) {
//     alert('❌ Error connecting to the server.');
//   }
// });
document.getElementById('applicationForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: this.name.value.trim(),
    email: this.email.value.trim(),
    phone: this.phone.value.trim(),
    githubOrLinkedIn: this.githubOrLinkedIn.value.trim(),
    resumeUrl: this.resumeUrl.value.trim(),
  };

  try {
    const response = await fetch('https://novexus-internship-page.onrender.com/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      document.getElementById('confirmationMsg').style.display = 'block';
      this.reset();
    } else if (response.status === 409) {
      const data = await response.json();
      alert('⚠️ ' + data.message);
    } else {
      alert('❌ Submission failed. Please try again.');
    }
  } catch (err) {
    alert('❌ Error connecting to the server.');
  }
});
