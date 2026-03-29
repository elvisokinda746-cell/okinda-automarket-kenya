const vehicleCatalog = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020, price: 20000 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 30000 },
];

const sparePartsCatalog = [
    { id: 1, vehicleId: 1, partName: 'Brake Pad', price: 100 },
    { id: 2, vehicleId: 2, partName: 'Oil Filter', price: 20 },
    { id: 3, vehicleId: 3, partName: 'Air Filter', price: 25 },
];

const seedDatabase = async () => {
    // Replace this with actual database call
    console.log('Seeding database...');
    console.log('Vehicles:', vehicleCatalog);
    console.log('Spare Parts:', sparePartsCatalog);
};

seedDatabase();