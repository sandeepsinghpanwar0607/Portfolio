/**
 * ==============================================================================
 * PERSONAL PORTFOLIO SCRIPT & CONFIGURATION
 * Developer: Sandeep Singh Panwar
 * Title: Software Engineer | Java Fullstack Developer
 * ==============================================================================
 */

// ==============================================================================
// 1. ===== EDIT YOUR INFORMATION HERE =====
// Any changes you make in this section will automatically update across your portfolio!
// ==============================================================================

const portfolioData = {
    // Basic Details
    name: "Sandeep Singh Panwar",
    shortName: "Sandeep",
    title: "Software Engineer | Java Fullstack Developer",
    location: "Indore M.P., India",
    
    // Contact Information from verified Resume
    email: "sandeepsinghpanwar313@gmail.com",
    phone: "+91 9425819963",
    github: "https://github.com/sandeepsinghpanwar0607",
    linkedin: "https://linkedin.com/in/sandeep-singh06",
    portfolioUrl: "https://sandeep-portfolio-one-khaki.vercel.app",
    
    // Resume and Media Paths
    resumeDownloadPath: "assets/resume/Sandeep_Singh_Panwar_Resume.pdf",
    resumeViewPath: "assets/resume/Sandeep_Singh_Panwar_Resume.html",
    profileImagePath: "assets/images/profile-avatar.jpg",
    
    // About Me Introduction
    aboutSummary: "Java Full Stack Developer with hands-on experience in developing scalable web applications using Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, and REST APIs. Skilled in building responsive frontend applications using JavaScript, HTML, CSS, and Bootstrap, with database experience in PostgreSQL and MySQL. Familiar with Spring Security, JWT authentication, Microservices, Git, GitHub, Docker, and deployment. Strong understanding of OOP, MVC architecture, CRUD operations, and database integration, with a passion for building efficient real-world applications and continuously learning modern technologies.",
    
    // Degree / Education Highlight
    degreeHighlight: "Bachelor of Technology (B.Tech) in Computer Science and Engineering"
};

// ==============================================================================
// 2. ===== EDIT PROJECTS HERE =====
// You can add, edit, or remove project objects from this array.
// ==============================================================================
const projects = [
    {
        id: "multimart",
        title: "Multimart – Multivendor E-Commerce Platform",
        technologies: ["Spring Boot", "React", "PostgreSQL (Neon)", "Docker", "REST APIs"],
        image: "assets/images/project-multimart.jpg",
        description: "Developed a full-stack multivendor e-commerce platform with Admin, Vendor, and Customer roles.",
        features: [
            "Product catalog & category-based browsing with dynamic search",
            "Shopping cart, order placement, and live order status tracking",
            "Vendor dashboard for product management and sales tracking",
            "REST APIs built using Spring Boot, JPA/Hibernate & PostgreSQL (Neon)"
        ],
        liveDemo: "https://multimartfrontend.onrender.com",
        github: "https://github.com",
        hasLiveDemo: true
    },
    {
        id: "person-hub",
        title: "Person Hub – CRUD Application",
        technologies: ["Spring Boot", "PostgreSQL (Neon)", "REST APIs", "Bootstrap"],
        image: "assets/images/project-personhub.jpg",
        description: "Developed a CRUD application for managing person records with Add, View, Update and Delete operations.",
        features: [
            "Complete CRUD operations (Add, View, Update, Delete person)",
            "Robust RESTful APIs with data validation and error handling",
            "Integrated PostgreSQL (Neon) cloud database for persistence",
            "Responsive dashboard interface with search and filter support"
        ],
        liveDemo: "https://personhub.onrender.com/",
        github: "https://github.com",
        hasLiveDemo: true
    },
    {
        id: "employee-management",
        title: "Employee Management System",
        technologies: ["Java", "JSP", "Servlet", "MySQL", "MVC Architecture"],
        image: "assets/images/project-employee.jpg",
        description: "Developed a web-based system to manage employee records with CRUD operations, search functionality and database integration.",
        features: [
            "Corporate employee management with complete CRUD lifecycle",
            "Search functionality by department, role, and employee ID",
            "Clean MVC architecture using JSP and Servlets",
            "Structured relational database integration with MySQL"
        ],
        liveDemo: "#contact", // or link if hosted
        github: "https://github.com",
        hasLiveDemo: false
    },
    {
        id: "hospital-management",
        title: "Hospital Management System",
        technologies: ["Core Java", "JDBC", "MySQL", "OOP"],
        image: "assets/images/project-hospital.jpg",
        description: "Developed modules for managing patients, doctors, appointments and billing with CRUD operations and MySQL database integration.",
        features: [
            "Patient admission, records, and history management",
            "Doctor scheduling and OPD appointment booking system",
            "Automated billing calculations and invoice generation",
            "Data persistence using JDBC and normalized MySQL schema"
        ],
        liveDemo: "#contact",
        github: "https://github.com",
        hasLiveDemo: false
    }
];

// ==============================================================================
// 3. ===== EDIT SKILLS HERE =====
// Grouped into categories matching your exact resume.
// ==============================================================================
const skillsData = [
    {
        category: "Programming",
        icon: "fa-solid fa-code",
        skills: [
            { name: "Java", icon: "fa-brands fa-java" },
            { name: "SQL", icon: "fa-solid fa-database" }
        ]
    },
    {
        category: "Backend",
        icon: "fa-solid fa-server",
        skills: [
            { name: "Spring Boot", icon: "fa-solid fa-leaf" },
            { name: "Spring MVC", icon: "fa-solid fa-network-wired" },
            { name: "Spring Data JPA", icon: "fa-solid fa-table" },
            { name: "Hibernate", icon: "fa-solid fa-layer-group" },
            { name: "REST APIs", icon: "fa-solid fa-arrows-split-up-and-left" },
            { name: "Microservices", icon: "fa-solid fa-cubes" }
        ]
    },
    {
        category: "Frontend",
        icon: "fa-solid fa-desktop",
        skills: [
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3", icon: "fa-brands fa-css3-alt" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "Bootstrap", icon: "fa-brands fa-bootstrap" }
        ]
    },
    {
        category: "Database",
        icon: "fa-solid fa-database",
        skills: [
            { name: "PostgreSQL (Neon)", icon: "fa-solid fa-database" },
            { name: "MySQL", icon: "fa-solid fa-database" }
        ]
    },
    {
        category: "Security",
        icon: "fa-solid fa-shield-halved",
        skills: [
            { name: "Spring Security", icon: "fa-solid fa-lock" },
            { name: "JWT Authentication", icon: "fa-solid fa-key" }
        ]
    },
    {
        category: "Tools & DevOps",
        icon: "fa-solid fa-toolbox",
        skills: [
            { name: "Git", icon: "fa-brands fa-git-alt" },
            { name: "GitHub", icon: "fa-brands fa-github" },
            { name: "Docker", icon: "fa-brands fa-docker" },
            { name: "Maven", icon: "fa-solid fa-box-archive" },
            { name: "Postman", icon: "fa-solid fa-paper-plane" },
            { name: "Render", icon: "fa-solid fa-cloud" }
        ]
    },
    {
        category: "Core Concepts",
        icon: "fa-solid fa-brain",
        skills: [
            { name: "OOP Principles", icon: "fa-solid fa-sitemap" },
            { name: "MVC Architecture", icon: "fa-solid fa-diagram-project" },
            { name: "JDBC", icon: "fa-solid fa-link" }
        ]
    }
];

// ==============================================================================
// 4. ===== EDIT SERVICES HERE =====
// "What I Can Do" capability cards
// ==============================================================================
const servicesData = [
    {
        title: "Java Backend Development",
        icon: "fa-brands fa-java",
        description: "Building scalable, multi-threaded, robust server-side applications following clean OOP principles and modern Java design patterns."
    },
    {
        title: "Spring Boot Development",
        icon: "fa-solid fa-leaf",
        description: "Rapidly engineering enterprise web applications, microservices, and auto-configured backends with Spring Boot and Spring Data JPA."
    },
    {
        title: "REST API Development",
        icon: "fa-solid fa-arrows-split-up-and-left",
        description: "Designing and developing secure, versioned, and thoroughly tested RESTful web services with JSON serialization and HTTP standards."
    },
    {
        title: "Full Stack Web Development",
        icon: "fa-solid fa-layer-group",
        description: "Bridging frontend interfaces with backend engines, integrating responsive JavaScript/Bootstrap UIs with Java Spring Boot services."
    },
    {
        title: "Database Integration",
        icon: "fa-solid fa-database",
        description: "Architecting relational schemas, optimizing SQL queries, and implementing ORM mapping using Hibernate, PostgreSQL, and MySQL."
    },
    {
        title: "CRUD Application Development",
        icon: "fa-solid fa-sliders",
        description: "Delivering end-to-end data management workflows with input validation, secure authentication, pagination, and intuitive UX."
    }
];

// ==============================================================================
// 5. DOM INITIALIZATION & DYNAMIC RENDERING
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate basic information
    injectBasicInformation();

    // 2. Render dynamic sections
    renderSkills();
    renderServices();
    renderProjects();

    // 3. Initialize UI interactions
    initNavbarBehavior();
    initScrollSpy();
    initBackToTop();
    initContactForm();
});

/**
 * Injects portfolioData into all corresponding DOM elements
 */
function injectBasicInformation() {
    // Hero & Navbar Branding
    setTextContent("heroName", portfolioData.name);
    setTextContent("heroTitle", portfolioData.title);
    setTextContent("heroDescription", portfolioData.aboutSummary);
    setTextContent("heroLocation", portfolioData.location);
    setTextContent("navBrandName", portfolioData.shortName);
    setTextContent("aboutText", portfolioData.aboutSummary);
    setTextContent("footerName", portfolioData.name);
    setTextContent("footerTitle", portfolioData.title);
    setTextContent("contactCardLocation", portfolioData.location);

    // Profile Image
    const profileImgEl = document.getElementById("heroProfileImage");
    if (profileImgEl && portfolioData.profileImagePath) {
        profileImgEl.src = portfolioData.profileImagePath;
        profileImgEl.alt = `${portfolioData.name} - ${portfolioData.title}`;
    }

    // Resume Links
    const resumeLinks = [
        "btnDownloadResumeHero",
        "btnAboutResume",
        "btnModalDownloadResume"
    ];
    resumeLinks.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = portfolioData.resumeDownloadPath;
        }
    });

    // Social Links
    setLinkHref("heroGithubLink", portfolioData.github);
    setLinkHref("heroLinkedinLink", portfolioData.linkedin);
    setLinkHref("heroEmailLink", `mailto:${portfolioData.email}`);
    
    setLinkHref("contactCardGithub", portfolioData.github);
    setLinkHref("contactCardLinkedin", portfolioData.linkedin);
    setLinkHref("contactCardEmail", `mailto:${portfolioData.email}`);
    setTextContent("contactCardEmail", portfolioData.email);

    // Footer Socials
    const footerLinks = document.querySelectorAll("#footerSocials a");
    if (footerLinks.length >= 3) {
        footerLinks[0].href = portfolioData.github;
        footerLinks[1].href = portfolioData.linkedin;
        footerLinks[2].href = `mailto:${portfolioData.email}`;
    }
}

/**
 * Dynamically renders categorized skills
 */
function renderSkills() {
    const container = document.getElementById("skillsContainer");
    if (!container) return;

    container.innerHTML = skillsData.map(group => `
        <div class="col-md-6 col-lg-4">
            <div class="skill-category-card">
                <div class="skill-category-header">
                    <div class="skill-cat-icon">
                        <i class="${group.icon}"></i>
                    </div>
                    <h3 class="skill-cat-title">${group.category}</h3>
                </div>
                <div class="skill-items-grid">
                    ${group.skills.map(skill => `
                        <div class="skill-badge">
                            <i class="${skill.icon}"></i>
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Dynamically renders the 6 service cards
 */
function renderServices() {
    const container = document.getElementById("servicesContainer");
    if (!container) return;

    container.innerHTML = servicesData.map(service => `
        <div class="col-md-6 col-lg-4">
            <div class="service-card">
                <div class="service-icon-box">
                    <i class="${service.icon}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Dynamically renders projects from the projects array
 */
function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="col-md-6 col-lg-6">
            <div class="project-card">
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
                    <div class="project-overlay"></div>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    
                    <ul class="project-features-list">
                        ${project.features.map(feat => `<li>${feat}</li>`).join('')}
                    </ul>

                    <div class="project-tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                    </div>

                    <div class="project-actions mt-3">
                        ${project.hasLiveDemo ? `
                            <a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-crimson-glow btn-project flex-grow-1">
                                <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> Live Demo
                            </a>
                        ` : `
                            <a href="${project.liveDemo}" class="btn btn-glass-outline btn-project flex-grow-1">
                                <i class="fa-solid fa-code me-1"></i> Inquire Project
                            </a>
                        `}
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-glass-outline btn-project flex-grow-1">
                            <i class="fa-brands fa-github me-1"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==============================================================================
// 6. UI HELPERS & EVENT LISTENERS
// ==============================================================================

function setTextContent(id, text) {
    const el = document.getElementById(id);
    if (el && text) el.textContent = text;
}

function setLinkHref(id, href) {
    const el = document.getElementById(id);
    if (el && href) el.href = href;
}

/**
 * Sticky navbar styling and mobile menu auto-close
 */
function initNavbarBehavior() {
    const navbar = document.getElementById("mainNav");
    const navbarCollapse = document.getElementById("navbarContent");
    const navLinks = document.querySelectorAll(".custom-navbar .nav-link, .nav-btn");

    // Scroll listener for sticky navbar background intensity
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }, { passive: true });

    // Auto close mobile menu on clicking any link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });
}

/**
 * Highlight active navbar link on scrolling (ScrollSpy)
 */
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }, { passive: true });
}

/**
 * Back to top floating button logic
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
    }, { passive: true });

    backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/**
 * Contact Form validation and feedback handling
 */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("formAlertMessage");
    if (!form || !alertBox) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Check HTML5 validity
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        // Provide simulated clean submission feedback
        const submitBtn = document.getElementById("btnSendMessage");
        const originalBtnHtml = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...`;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;

            // Show friendly notification
            alertBox.className = "alert alert-success d-block bg-dark text-white border-crimson mt-3 p-3";
            alertBox.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-circle-check text-crimson fa-lg"></i>
                    <div>
                        <strong>Thank you, ${name}!</strong> Your message has been prepared. I will respond to <u>${email}</u> promptly.
                    </div>
                </div>
            `;

            form.reset();
            form.classList.remove("was-validated");

            // Auto dismiss notification after 6 seconds
            setTimeout(() => {
                alertBox.className = "mt-3 d-none";
            }, 6000);
        }, 900);
    });
}
