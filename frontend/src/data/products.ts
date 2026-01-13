export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
}

export const productCategories = [
    {
        title: "Sarees",
        slug: "sarees",
        image: "/images/sarees.png",
        items: [
            {
                id: "saree-pure-silk",
                name: "Pure Silk Saree",
                price: 15000,
                description: "Elegant pure silk saree with intricate zari work, perfect for weddings and special occasions.",
                image: "/images/products/saree-pure-silk.png"
            },
            {
                id: "saree-wedding-silk",
                name: "Wedding Silk Saree",
                price: 25000,
                description: "Grand wedding silk saree featuring traditional motifs and rich pallu.",
                image: "/images/products/saree-wedding-silk.png"
            },
            {
                id: "saree-silk-cotton",
                name: "Silk Cotton Saree",
                price: 3500,
                description: "Lightweight and comfortable silk cotton saree suitable for daily wear and functions.",
                image: "/images/products/saree-silk-cotton.png"
            },
            {
                id: "saree-pure-cotton",
                name: "Pure Cotton Saree",
                price: 1200,
                description: "Breathable pure cotton saree, ideal for the summer season.",
                image: "/images/products/saree-pure-cotton.png"
            },
            {
                id: "saree-banarasi",
                name: "Banarasi Saree",
                price: 8000,
                description: "Classic Banarasi saree with rich brocade work.",
                image: "/images/products/saree-banarasi.png"
            },
            {
                id: "saree-party-wear",
                name: "Party Wear Saree",
                price: 5000,
                description: "Stylish party wear saree with contemporary designs.",
                image: "/images/products/saree-party-wear.png"
            },
            {
                id: "saree-kolkata",
                name: "Kolkata & Bhagalpur Saree",
                price: 2500,
                description: "Traditional Kolkata and Bhagalpur sarees known for their unique texture.",
                image: "/images/products/saree-kolkata.png"
            },
            {
                id: "saree-sungudi",
                name: "Sungudi Saree",
                price: 900,
                description: "Authentic Sungudi cotton saree with traditional tie-dye patterns.",
                image: "/images/sarees.png"
            },
            {
                id: "saree-printed-cotton",
                name: "Printed Cotton Saree",
                price: 800,
                description: "Vibrant printed cotton saree for casual wear.",
                image: "/images/sarees.png"
            },
            {
                id: "saree-embroidery",
                name: "Embroidery Saree",
                price: 4500,
                description: "Beautiful saree featuring delicate embroidery work.",
                image: "/images/sarees.png"
            },
            {
                id: "saree-kerala",
                name: "Kerala Saree",
                price: 2000,
                description: "Traditional Kerala Kasavu saree with golden border.",
                image: "/images/sarees.png"
            },
            {
                id: "saree-fancy",
                name: "Fancy & Synthetic Saree",
                price: 1500,
                description: "Trendy fancy saree in synthetic fabric, easy to drape.",
                image: "/images/sarees.png"
            },
        ],
    },
    {
        title: "Uniforms",
        slug: "uniforms",
        image: "/images/uniforms.png",
        items: [
            {
                id: "uniform-school",
                name: "School Uniform",
                price: 500,
                description: "Durable and comfortable school uniform fabrics.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-college",
                name: "College Uniform",
                price: 600,
                description: "Smart and formal college uniform sets.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-company",
                name: "Company Uniform",
                price: 800,
                description: "Professional company uniforms for various industries.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-corporate",
                name: "Corporate Office Wear",
                price: 1200,
                description: "Premium corporate office wear for a polished look.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-saree",
                name: "Functional Saree",
                price: 1000,
                description: "Uniform sarees for teachers and staff.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-group",
                name: "Group Saree",
                price: 1000,
                description: "Matching group sarees for events and functions.",
                image: "/images/uniforms.png"
            },
            {
                id: "uniform-custom",
                name: "Customized Order",
                price: 0,
                description: "Customized uniform orders as per your requirements.",
                image: "/images/uniforms.png"
            },
        ],
    },
    {
        title: "Blouses",
        slug: "blouses",
        image: "/images/blouses.png",
        items: [
            {
                id: "blouse-jacquard",
                name: "Jacquard Cotton Blouse",
                price: 250,
                description: "Textured Jacquard cotton blouse material.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-2x2",
                name: "Two-by-Two Blouse",
                price: 150,
                description: "Standard 2x2 blouse piece in various colors.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-lizzy",
                name: "Lizzy Busy Blouse",
                price: 180,
                description: "Soft and comfortable Lizzy Busy blouse fabric.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-silk-cotton",
                name: "Silk Cotton Blouse",
                price: 350,
                description: "Rich silk cotton blouse bit for special occasions.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-slub",
                name: "Slub Cotton Blouse",
                price: 200,
                description: "Modern slub cotton blouse material.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-tissue",
                name: "Tissue Blouse",
                price: 400,
                description: "Shimmering tissue blouse fabric.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-batik",
                name: "Batik Print Blouse",
                price: 300,
                description: "Artistic Batik print blouse piece.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-embroidery",
                name: "Embroidery Blouse",
                price: 500,
                description: "Ready-to-stitch embroidery blouse material.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-tussar",
                name: "Tussar Silk Blouse",
                price: 600,
                description: "Premium Tussar silk blouse fabric.",
                image: "/images/blouses.png"
            },
            {
                id: "blouse-kalamkari",
                name: "Kalamkari Blouse",
                price: 350,
                description: "Traditional Kalamkari print blouse.",
                image: "/images/blouses.png"
            },
        ],
    },
    {
        title: "Running Materials",
        slug: "running-materials",
        image: "/images/running_materials.png",
        items: [
            {
                id: "material-satin",
                name: "Plain Satin Cloth",
                price: 100,
                description: "Smooth satin fabric for lining or dresses.",
                image: "/images/running_materials.png"
            },
            {
                id: "material-slub",
                name: "Slub Silk Cotton",
                price: 150,
                description: "Textured slub silk cotton running material.",
                image: "/images/running_materials.png"
            },
            {
                id: "material-cambric",
                name: "Cambric Printed Set",
                price: 600,
                description: "Cambric cotton printed top and pant material set.",
                image: "/images/running_materials.png"
            },
            {
                id: "material-jacquard",
                name: "Jacquard Material",
                price: 200,
                description: "Patterned Jacquard running material.",
                image: "/images/running_materials.png"
            },
        ],
    },
    {
        title: "Ready-Made",
        slug: "ready-made",
        image: "/images/readymade.png",
        items: [
            {
                id: "ready-3piece",
                name: "3-Piece Set",
                price: 1500,
                description: "Complete 3-piece set with top, bottom, and dupatta.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-straight",
                name: "Straight Cut Kurti",
                price: 800,
                description: "Elegant straight cut kurti.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-umbrella",
                name: "Umbrella Cut Kurti",
                price: 900,
                description: "Flared umbrella cut kurti.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-trending",
                name: "Trending Design",
                price: 1200,
                description: "Latest trending ready-made outfit.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-lehenga",
                name: "Lehenga",
                price: 3000,
                description: "Beautiful party wear lehenga.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-coord",
                name: "Co-ord Set",
                price: 1500,
                description: "Stylish matching co-ord set.",
                image: "/images/readymade.png"
            },
            {
                id: "ready-halfsaree",
                name: "Half Saree",
                price: 2500,
                description: "Traditional half saree set.",
                image: "/images/readymade.png"
            },
        ],
    },
    {
        title: "Bottom Wear",
        slug: "bottom-wear",
        image: "/images/bottom_wear.png",
        items: [
            {
                id: "bottom-cotton",
                name: "Pure Cotton Pants",
                price: 400,
                description: "Comfortable pure cotton pants.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-silk-cotton",
                name: "Silk Cotton Pants",
                price: 500,
                description: "Elegant silk cotton pants.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-slub",
                name: "Slub Cotton Pants",
                price: 450,
                description: "Textured slub cotton pants.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-leggings",
                name: "Leggings",
                price: 300,
                description: "Stretchy leggings available in ankle and full length.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-inskirt",
                name: "Inskirt",
                price: 150,
                description: "Cotton inskirt for sarees.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-shapewear",
                name: "Saree Shapewear",
                price: 600,
                description: "Body contouring saree shapewear.",
                image: "/images/bottom_wear.png"
            },
            {
                id: "bottom-branded",
                name: "Branded Bottoms",
                price: 700,
                description: "Premium branded bottom wear.",
                image: "/images/bottom_wear.png"
            },
        ],
    },
    {
        title: "Accessories",
        slug: "accessories",
        image: "/images/accessories.png",
        items: [
            {
                id: "acc-innerwear",
                name: "Innerwear",
                price: 200,
                description: "Comfortable men's and women's innerwear.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-shawl",
                name: "Shawl",
                price: 300,
                description: "Warm and stylish shawl.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-blanket",
                name: "Blanket",
                price: 800,
                description: "Cozy blanket/bedspread.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-pillow",
                name: "Pillow Cover",
                price: 100,
                description: "Soft cotton pillow covers.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-towel",
                name: "Towel",
                price: 150,
                description: "Absorbent cotton towels.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-lining",
                name: "Lining Material",
                price: 50,
                description: "Good quality lining material.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-fall",
                name: "Saree Fall",
                price: 30,
                description: "Cotton saree falls.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-blouse-ready",
                name: "Ready-made Blouse",
                price: 500,
                description: "Stitched ready-made blouse.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-nighty",
                name: "Nighty",
                price: 400,
                description: "Comfortable cotton nighty.",
                image: "/images/accessories.png"
            },
            {
                id: "acc-nightsuit",
                name: "Night Suit",
                price: 600,
                description: "Trendy night suit set.",
                image: "/images/accessories.png"
            },
        ],
    },
    {
        title: "Men's Wear",
        slug: "mens-wear",
        image: "/images/mens_wear.png",
        items: [
            {
                id: "men-shirt",
                name: "Branded Shirt",
                price: 800,
                description: "High-quality banded shirt.",
                image: "/images/mens_wear.png"
            },
            {
                id: "men-dhoti",
                name: "Dhoti",
                price: 400,
                description: "Traditional cotton dhoti.",
                image: "/images/mens_wear.png"
            },
            {
                id: "men-gift",
                name: "Pant-Shirt Gift Box",
                price: 1500,
                description: "Premium pant-shirt material gift box.",
                image: "/images/mens_wear.png"
            },
            {
                id: "men-kurta",
                name: "Kurta",
                price: 700,
                description: "Stylish kurta for men.",
                image: "/images/mens_wear.png"
            },
            {
                id: "men-wedding",
                name: "Wedding Set",
                price: 2500,
                description: "Complete men's wedding set.",
                image: "/images/mens_wear.png"
            },
        ],
    },
];
