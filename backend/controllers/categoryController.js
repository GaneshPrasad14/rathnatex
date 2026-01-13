const Category = require('../models/Category');

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a category
exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        let image = '';
        if (req.file) {
            image = `/uploads/${req.file.filename}`;
        }

        const newCategory = new Category({
            name,
            slug,
            image,
            description
        });

        const category = await newCategory.save();
        res.json(category);
    } catch (err) {
        console.error(err.message);
        if (err.code === 11000) {
            return res.status(400).json({ msg: 'Category already exists' });
        }
        res.status(500).send('Server Error');
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        let category = await Category.findById(req.params.id);

        if (!category) return res.status(404).json({ msg: 'Category not found' });

        category.name = name || category.name;
        category.description = description || category.description;

        if (name) {
            category.slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        if (req.file) {
            category.image = `/uploads/${req.file.filename}`;
        }

        await category.save();
        res.json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ msg: 'Category not found' });

        await category.deleteOne();
        res.json({ msg: 'Category removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
