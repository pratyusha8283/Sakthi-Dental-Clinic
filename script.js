/**
 * Sakthi Dental Clinic - Main JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {

  // 1. Array of all 15 Treatments provided by Sakthi Dental Clinic
  const treatmentsData = [
    {
      title: "Teeth Cleaning & Scaling",
      tag: "Preventive & Gum Care",
      description: "At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you're dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health.",
      image: "assets/Teeth Cleaning.png"
    },
    {
      title: "Tooth Filling",
      tag: "Restorative Care",
      description: "At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth.",
      image: "assets/Tooth-Filling.jpg"
    },
    {
      title: "Tooth Extraction",
      tag: "General Surgery",
      description: "When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. Our experienced dental team evaluates every option before recommending removal, using gentle techniques to minimize discomfort.",
      image: "assets/Teeth Extraction.png"
    },
    {
      title: "Artificial Complete Denture",
      tag: "Prosthodontics",
      description: "At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit.",
      image: "assets/Artificial Complete Denture.png"
    },
    {
      title: "Dental Implants",
      tag: "Implantology",
      description: "Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth.",
      image: "assets/Impants.png"
    },
    {
      title: "Laser Dentistry",
      tag: "Advanced Procedures",
      description: "At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy.",
      image: "assets/Laser-Surgery.png"
    },
    {
      title: "Root Canal Therapy",
      tag: "Endodontics",
      description: "When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues and relieve pain.",
      image: "assets/Root Canal Treatment.png"
    },
    {
      title: "Wisdom Tooth Extraction",
      tag: "Oral Surgery",
      description: "If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience.",
      image: "assets/Wisdom Teeth Removal.png"
    },
    {
      title: "Fixed Partial Denture (Bridge)",
      tag: "Prosthodontics",
      description: "Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. We focus on custom-made dental bridges that restore your smile's appearance and chewing function.",
      image: "assets/Fixed Partial Denture.png"
    },
    {
      title: "Teeth Whitening (Bleaching)",
      tag: "Cosmetic Dentistry",
      description: "Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades and restore your smile's natural radiance.",
      image: "assets/Bleaching.png"
    },
    {
      title: "Veneers",
      tag: "Cosmetic Dentistry",
      description: "Transform your smile with dental veneers, thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth’s appearance.",
      image: "assets/Veneer Treatment.jpg"
    },
    {
      title: "Pediatric Dentistry",
      tag: "Pediatric Care",
      description: "At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during routine check-ups and preventive treatments.",
      image: "assets/Pediatric-dentistry.png"
    },
    {
      title: "Flap Surgery",
      tag: "Periodontics",
      description: "For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing.",
      image: "assets/Flap-surgery.png"
    },
    {
      title: "Orthodontic Braces",
      tag: "Orthodontics",
      description: "Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces—metal, ceramic, or lingual—to suit your preferences and achieve improved alignment and bite function.",
      image: "assets/Orthodonic-Treatment.png"
    },
    {
      title: "Clear Aligners",
      tag: "Orthodontics",
      description: "For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your treatment.",
      image: "assets/Aligner.png"
    }
  ];

  // 2. Render Treatment Cards Dynamically
  const servicesGrid = document.getElementById("servicesGrid");

  if (servicesGrid) {
    servicesGrid.className = "services-grid";

    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/");
    const itemsToDisplay = isHomePage ? treatmentsData.slice(0, 6) : treatmentsData;

    servicesGrid.innerHTML = itemsToDisplay
      .map(
        (treatment) => `
        <div class="card">
          <img src="${treatment.image}" alt="${treatment.title}" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(treatment.title)}'">
          <div class="card-body">
            <span class="card-tag">${treatment.tag}</span>
            <h3>${treatment.title}</h3>
            <p>${treatment.description}</p>
            <a href="contact.html" class="btn-primary">Fix an Appointment</a>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 3. Direct Hamburger Menu Toggle Fix
  const navToggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");

  if (navToggle && navbar) {
    navToggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const isDisplayed = window.getComputedStyle(navbar).display !== "none";

      if (isDisplayed) {
        navbar.style.setProperty("display", "none", "important");
      } else {
        navbar.style.setProperty("display", "flex", "important");
      }
    });

    // Close navigation menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navbar.contains(event.target)) {
        if (window.innerWidth <= 768) {
          navbar.style.setProperty("display", "none", "important");
        }
      }
    });
  }
    // Highlight Active Navigation Link Automatically
  const currentFileName = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href") ? link.getAttribute("href").toLowerCase() : "";

    // Highlight current active page link
    if (
      linkHref === currentFileName ||
      (currentFileName === "" && linkHref === "index.html") ||
      (currentFileName === "index.html" && (linkHref === "./" || linkHref === "index.html"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
 // 5. Contact Form Submission Handler (In-Page Success Message)
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Patient";

      // Basic Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && !emailPattern.test(emailInput.value.trim())) {
        if (formResponse) {
          formResponse.innerHTML = `<div class="alert-box error-alert">Please provide a valid email address.</div>`;
        }
        emailInput.focus();
        return;
      }

      // Render In-Page Success Message
      if (formResponse) {
        formResponse.innerHTML = `
          <div class="alert-box success-alert">
            <strong>✓ Appointment Requested Successfully!</strong><br>
            Thank you, <b>${userName}</b>. Sakthi Dental Clinic team will contact you shortly to confirm your schedule.
          </div>
        `;
      }

      // Reset form fields
      contactForm.reset();
    });
  }

});
// Accordion Toggle Function
function toggleAccordion(index) {
  const selectedItem = document.getElementById(`faq-item-${index}`);
  const answerPanel = selectedItem.querySelector('.faq-answer');
  const isOpen = selectedItem.classList.contains('active');

  // Close all other open accordion items (Optional: accordion behavior)
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.classList.remove('active');
    const panel = item.querySelector('.faq-answer');
    if (panel) panel.style.maxHeight = null;
  });

  // Toggle clicked item
  if (!isOpen) {
    selectedItem.classList.add('active');
    answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
  }
}