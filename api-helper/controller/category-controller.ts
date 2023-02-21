import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../models/Category';
import { connectToDatabase } from '../utils/connectToDataBase';
import SubCategory from '../models/SubCategory';
import { MongoAPIError } from 'mongodb';
import { MongooseError } from 'mongoose';
import { createSquence } from './squence-controller';
//-----------add new category--------------------------
export const addCategory = async (data: any, res: NextApiResponse) => {
  const { description, icon_source, sub_categories } = data;
  const id=await createSquence('category')
  let category;
  try {
    category = new Category({ description, icon_source, sub_categories });
    category = await category.save();
  } catch (err) {
    console.log(err);
  }
  if (!category) {
    return res.status(500).json('internal server error');
  }
  return res.status(201).json({ category });
};

//-------------get all categories ----------------------
export const getAllcategories = async (re: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  let categories;
  try {
    categories = await Category.find();
  } catch (err) {
    console.log(err);
  }
  if (!categories) {
    res.status(500).json({ message: 'internal server error' });
  }
  return res.status(200).json({ categories });
};
//------------de;ete category------------------
export const deleteCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const id = req.body.id;
  let categories;
  try {
    categories = await Category.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!categories) {
    res.status(500).json({ message: 'internal server error or no similar id founds' });
  }
  return res.status(200).json({ message: 'succesfully deleted' });
};

// --------------Add subcategory--------------------------
export const addSubCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { description } = req.body;
  let subcategory;
  let h = await createSquence('subcategory');
  console.log(h,'h')

  try {
    subcategory = new SubCategory({ description ,id:h.seq});
    await subcategory.save();
  } catch (error) {
    let newError = error as MongooseError;
    return res.status(405).json(newError.message);
  }
  if (!subcategory) {
    return res.status(500).json({ message: 'inetrnal server error' });
  }
  res.status(200).json(subcategory);
};
