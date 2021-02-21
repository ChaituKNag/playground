import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const formData = {
      "form-name": event.target.getAttribute("name"),
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => {
        console.log("submitted", formData)
      })
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Contact form</h1>
      <form
        onSubmit={handleSubmit}
        data-netlify="true"
        name="gatsby-form-contact"
      >
        <div>
          <input type="text" name="name" defaultValue="Darling" required />
        </div>
        <div>
          <input
            type="email"
            name="email"
            defaultValue="test@example.com"
            required
          />
        </div>
        <div>
          <textarea name="message" required defaultValue="I am Naga"></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </Layout>
  )
}

export default IndexPage
