const data = [
    {
        category: "Installation",
        tags: ["Fence Installation", "Gate Installation", "Gazebo Installation"],
        list: [
            {
                url: `media/portfolio/installation/1.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/2.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/3.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/4.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/5.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/6.webp`,
                tag: "Fence Installation"
            },
            {
                url: `media/portfolio/installation/7.webp`,
                tag: "Gate Installation"
            },
            {
                url: `media/portfolio/installation/8.webp`,
                tag: "Gate Installation"
            },
            {
                url: `media/portfolio/installation/9.webp`,
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
        category: "REMODELING",
        tags: ["Room Remodeling", "Kitchen Remodeling", "Bathroom Remodeling", "Closet Remodeling"],
        list: [
            {
                url: `media/portfolio/remodeling/room-2.webp`,
                tag: "Room Remodeling"
            },
            {
                url: `media/portfolio/remodeling/room-5.webp`,
                tag: "Room Remodeling"
            },
            {
                url: `media/portfolio/remodeling/kitchen-1.webp`,
                tag: "Kitchen Remodeling"
            },
            {
                url: `media/portfolio/remodeling/kitchen-3.webp`,
                tag: "Kitchen Remodeling"
            },
            {
                url: `media/portfolio/remodeling/bathroom-1.webp`,
                tag: "Bathroom Remodeling"
            },
            {
                url: `media/portfolio/remodeling/bathroom-6.webp`,
                tag: "Bathroom Remodeling"
            },
            {
                url: `media/portfolio/remodeling/closet-1.webp`,
                tag: "Closet Remodeling"
            },
            {
                url: `media/portfolio/remodeling/closet-2.webp`,
                tag: "Closet Remodeling"
            },
            {
                url: `media/portfolio/remodeling/closet-3.webp`,
                tag: "Closet Remodeling"
            },
        ]
    },
    {
        category: "All",
        list: [
            {
                url: `media/portfolio/remodeling/room-2.webp`,
                tag: "Room Remodeling"
            },
            {
                url: `media/portfolio/remodeling/kitchen-3.webp`,
                tag: "Kitchen Remodeling"
            },
            {
                url: `media/portfolio/remodeling/bathroom-6.webp`,
                tag: "Bathroom Remodeling"
            },
            {
                url: `media/portfolio/remodeling/closet-1.webp`,
                tag: "Closet Remodeling"
            },
            {
                url: `media/portfolio/installation/3.webp`,
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
const portfolioCategories = document.querySelectorAll(".portfolio__category")
let activePortfolioCategory = document.querySelector(".portfolio__category.active").getAttribute("data-category")

portfolioCategories.forEach((item, index, array) => {
    item.addEventListener("click", () => {
        array.forEach(item2 => item2.classList.remove("active"))

        item.classList.add("active")
        activePortfolioCategory = item.getAttribute("data-category")
        renderPortfolio({category: activePortfolioCategory})
    })
})

function renderPortfolio({category, tag}) {
    console.log(category)
    const categoryData = data.find(item => item.category.toLowerCase() === category.toLowerCase())

    console.log({categoryData})

    portfolioList.innerHTML = ""
    categoryData.list.forEach(item => {
        portfolioList.appendChild(document.createRange().createContextualFragment(`
            <li class="portfolio__item">
                <img src="${item.url}" alt="portfolio__item">
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

renderPortfolio({category: activePortfolioCategory})
