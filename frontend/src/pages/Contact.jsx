// pages/Contact.jsx
function Contact() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg"
          rows="4"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;
