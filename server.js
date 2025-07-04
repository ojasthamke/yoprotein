const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const mealPlans = [
    {
        id: '1',
        name: 'Vegetarian Delight',
        type: 'vegetarian',
        description: 'A delicious and healthy vegetarian meal plan.',
        price: 120,
        image: 'images/vegetarian-delight.jpg'
    },
    {
        id: '2',
        name: 'Chicken Power',
        type: 'non-vegetarian',
        description: 'High protein chicken meal plan for muscle gain.',
        price: 150,
        image: 'images/chicken-power.jpg'
    },
    {
        id: '3',
        name: 'Vegan Fresh',
        type: 'vegetarian',
        description: 'Fresh and organic vegan meals for a healthy lifestyle.',
        price: 130,
        image: 'images/vegan-fresh.jpg'
    },
    {
        id: '4',
        name: 'Fish Feast',
        type: 'non-vegetarian',
        description: 'Omega-rich fish meals for a balanced diet.',
        price: 160,
        image: 'images/fish-feast.jpg'
    }
];

app.get('/api/meal-plans', (req, res) => {
    res.json(mealPlans);
});

app.get('/api/meal-plans/:id', (req, res) => {
    const { id } = req.params;
    const plan = mealPlans.find(p => p.id === id);
    if (plan) {
        res.json(plan);
    } else {
        res.status(404).send('Meal plan not found');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
