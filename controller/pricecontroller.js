// Import necessary modules
import pricemodel from "../modals/pricemodel.js";
import itemmodel from "../modals/itemmodel.js";
import organizationmodel from "../modals/organizationmodel.js";




// POST controller to create a new pricing entry
export const createPricing = async (req, res) => {
  try {
    const { organization_id, item_id, zone, base_distance_in_km, fix_price } = req.body;

    // Create a new pricing instance
    const newPricing = new pricemodel({
      organization_id,
      item_id,
      zone,
      base_distance_in_km,
      fix_price
    });

    // Save the new pricing entry to the database
    const savedPricing = await newPricing.save();

    res.status(201).json(savedPricing); // Return the newly created pricing entry
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET controller to fetch all pricing entries

export const getAllPricing = async (req, res) => {
  try {
    // Fetch all pricing entries from the database
    const pricingEntries = await pricemodel.find()
      .populate('item_id') // Assuming 'item_id' is the field referencing the item model
      .populate('organization_id'); // Assuming 'organization_id' is the field referencing the organization model

    res.status(200).json(pricingEntries); // Return the fetched pricing entries
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Import necessary modules

// POST controller to create a new item
export const createItem = async (req, res) => {
  try {
    const { description, type } = req.body;

    // Create a new item instance
    const newItem = new itemmodel({
      description,
      type
    });

    // Save the new item to the database
    const savedItem = await newItem.save();

    res.status(201).json(savedItem); // Return the newly created item
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Import necessary modules

// POST controller to create a new organization
export const createOrganization = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new organization instance
    const newOrganization = new organizationmodel({
      name
    });

    // Save the new organization to the database
    const savedOrganization = await newOrganization.save();

    res.status(201).json(savedOrganization); // Return the newly created organization
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// Import necessary modules and models


// Controller function to calculate total price
