const data = [
    {
        category: "Installation",
        tags: ["Fence Installation", "Gate Installation", "Gazebo Installation"],
        list: [
            {
                url: `media/portfolio/Installation/1.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/2.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/3.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/4.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/5.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/6.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/Installation/7.webp`,
                tag: "Gate Installation"
            },
            {
                url: `media/portfolio/Installation/8.webp`,
                tag: "Gate Installation"
            },
            {
                url: `media/portfolio/Installation/9.webp`,
                tag: "Gazebo Installation"
            },
        ]
    },
    {
        category: "Landscaping",
        tags: ["Pation Installation", "Garden Design", "Hardscaping"],
        list: [
            {
                url: `media/portfolio/landscaping/1.webp`,
                tag: "Pation Installation"
            },
            {
                url: `media/portfolio/landscaping/2.webp`,
                tag: "Pation Installation"
            },
            {
                url: `media/portfolio/landscaping/3.webp`,
                tag: "Pation Installation"
            },
            {
                url: `media/portfolio/landscaping/4.webp`,
                tag: "Garden Design"
            },
            {
                url: `media/portfolio/landscaping/5.webp`,
                tag: "Pation Installation"
            },
            {
                url: `media/portfolio/landscaping/6.webp`,
                tag: "Hardscaping"
            },
            {
                url: `media/portfolio/landscaping/7.webp`,
                tag: "Hardscaping"
            },
            {
                url: `media/portfolio/landscaping/8.webp`,
                tag: "Pation Installation"
            },
            {
                url: `media/portfolio/landscaping/9.webp`,
                tag: "Hardscaping"
            },
        ]
    },
    {
        category: "ROOFING",
        tags: ["Wood Roofing", "Metal Roofing", "Solar Roofing", "Asphalt Roofing"],
        list: [
            {
                url: `media/portfolio/roofing/1.webp`,
                tag: "Wood Roofing"
            },
            {
                url: `media/portfolio/roofing/2.webp`,
                tag: "Solar Roofing"
            },
            {
                url: `media/portfolio/roofing/3.webp`,
                tag: "Wood Roofing"
            },
            {
                url: `media/portfolio/roofing/4.webp`,
                tag: "Wood Roofing"
            },
            {
                url: `media/portfolio/roofing/5.webp`,
                tag: "Asphalt Roofing"
            },
            {
                url: `media/portfolio/roofing/6.webp`,
                tag: "Metal Roofing"
            },
            {
                url: `media/portfolio/roofing/7.webp`,
                tag: "Wood Roofing"
            },
            {
                url: `media/portfolio/roofing/8.webp`,
                tag: "Asphalt Roofing"
            },
            {
                url: `media/portfolio/roofing/9.webp`,
                tag: "Asphalt Roofing"
            }
        ]
    },
    {
        category: "FLOORING",
        tags: ["Hardwood Flooring", "Stone Flooring"],
        list: [
            {
                url: `media/portfolio/flooring/1.webp`,
                tag: "Hardwood Flooring"
            },
            {
                url: `media/portfolio/flooring/2.webp`,
                tag: "Stone Flooring"
            },
            {
                url: `media/portfolio/flooring/3.webp`,
                tag: "Hardwood Flooring"
            },
            {
                url: `media/portfolio/flooring/4.webp`,
                tag: "Stone Flooring"
            }
        ]
    },
    {
        category: "Remodelling",
        tags: ["Room Remodelling", "Kitchen Remodelling", "Bathroom Remodelling", "Closet Remodelling"],
        list: [
            {
                url: `media/portfolio/remodelling/room-2.webp`,
                tag: "Room Remodelling"
            },
            {
                url: `media/portfolio/remodelling/room-5.webp`,
                tag: "Room Remodelling"
            },
            {
                url: `media/portfolio/remodelling/kitchen-1.webp`,
                tag: "Kitchen Remodelling"
            },
            {
                url: `media/portfolio/remodelling/kitchen-3.webp`,
                tag: "Kitchen Remodelling"
            },
            {
                url: `media/portfolio/remodelling/bathroom-1.webp`,
                tag: "Bathroom Remodelling"
            },
            {
                url: `media/portfolio/remodelling/bathroom-6.webp`,
                tag: "Bathroom Remodelling"
            },
            {
                url: `media/portfolio/remodelling/closet-1.webp`,
                tag: "Closet Remodelling"
            },
            {
                url: `media/portfolio/remodelling/closet-2.webp`,
                tag: "Closet Remodelling"
            },
            {
                url: `media/portfolio/remodelling/closet-3.webp`,
                tag: "Closet Remodelling"
            },
        ]
    },
    {
        category: "All",
        tags: [],
        list: [
            {
                url: `media/portfolio/remodelling/room-2.webp`,
                tag: "Room Remodelling"
            },
            {
                url: `media/portfolio/remodelling/kitchen-3.webp`,
                tag: "Kitchen Remodelling"
            },
            {
                url: `media/portfolio/remodelling/bathroom-6.webp`,
                tag: "Bathroom Remodelling"
            },
            {
                url: `media/portfolio/remodelling/closet-1.webp`,
                tag: "Closet Remodelling"
            },
            {
                url: `media/portfolio/Installation/3.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/landscaping/3.webp`,
                tag: "Patio Installation"
            },
            {
                url: `media/portfolio/roofing/2.webp`,
                tag: "Solar Roofing"
            },
            {
                url: `media/portfolio/flooring/4.webp`,
                tag: "Stone Flooring"
            },
            {
                url: `media/portfolio/landscaping/1.webp`,
                tag: "Patio Installation"
            }
        ]
    }
]

const portfolioList = document.querySelector(".portfolio__list")
const serviceTag = portfolioList.getAttribute("data-service-tag")
const categoryTag = portfolioList.getAttribute("data-service-category")
const portfolioCategories = document.querySelectorAll(".portfolio__category")
let activePortfolioCategory = document.querySelector(".portfolio__category.active")?.getAttribute("data-category")
let activePortfolioTag = document.querySelector(".portfolio__category.active")?.getAttribute("data-tag")

portfolioCategories.forEach((item, index, array) => {
    item.addEventListener("click", () => {
        array.forEach(item2 => item2.classList.remove("active"))

        item.classList.add("active")
        activePortfolioCategory = item.getAttribute("data-category")
        activePortfolioTag = item.getAttribute("data-tag")

        renderPortfolio({category: activePortfolioCategory, tag: activePortfolioTag})
    })
})

function renderPortfolio({category, tag}) {
    const categoryData = data.find(item => item.category.toLowerCase() === category?.toLowerCase() || item.tags?.includes(tag))
    let list = categoryData?.list || []
    
    if(tag) {
        list = [...list].filter(item => item.tag === tag)
    }

    if(serviceTag || categoryTag) {
        if(categoryTag) {
            list = data.find(item => item.category.toLowerCase() === categoryTag?.toLowerCase()).list
        }else if(serviceTag) {
            list = data.find(item => item.tags.includes(serviceTag)).list.filter(item => item.tag === serviceTag)
        }
    }
    

    console.log({categoryData, serviceTag})

    portfolioList.innerHTML = ""
    list.forEach(item => {
        portfolioList.appendChild(document.createRange().createContextualFragment(`
            <li class="portfolio__item">
                <img src="${getAbsPath(item.url)}" alt="portfolio__item">
                <p class="portfolio__tag">${item.tag}</p>

                <div class="layer">
                    <img class="search-icon" src="media/icons/search.png" alt="portfolio__icon">
                </div>
            </li>
        `))
    })

    const portfolioItem = document.querySelectorAll('.portfolio__item')
    portfolioItem.forEach(item => {
        item.addEventListener("click", e => {
            openMediaModal(item.querySelector("img").getAttribute("src"))
        })
    })
}   

renderPortfolio({category: activePortfolioCategory, tag: activePortfolioTag})

function getAbsPath(url) {
    let abs = ""

    if(serviceTag) {
        abs = "../../../"
    }else if(window.location.pathname.includes("pages")) {
        abs = "../../"
    }

    return abs + url
}