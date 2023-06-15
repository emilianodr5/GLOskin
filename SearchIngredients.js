// import packages
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import SearchBar from './searchBar';
import styles from './styles';
import Separator from './separator';

const SearchIngredients = ({ navigation }) => {

    const [data, setData] = useState([
      {
        IngName: "Homosalate",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Homosalate is associated with no proven health risks. This ingredient is highly toxic to marine organisms. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
        Links: "https://pubmed.ncbi.nlm.nih.gov/12107642/, https://pubmed.ncbi.nlm.nih.gov/28798318/",
      },
  {
        IngName: "2-ethylhexyl 2-cyano-3,3-diphenyl-2-propenoate",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Octocrylene is associated with no proven health risks. This ingredient may cause mild skin irritation or allergy in individuals with sensitive skin.",
        Links: "https://pubmed.ncbi.nlm.nih.gov/31588614/, https://pubmed.ncbi.nlm.nih.gov/31588614/",
        },
  {
        IngName: "2-ethylhexyl 2-cyano-3,3-diphenylacrylate",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Octocrylene is associated with no proven health risks. This ingredient may cause mild skin irritation or allergy in individuals with sensitive skin.",
        Links: "https://pubmed.ncbi.nlm.nih.gov/31588614/, https://pubmed.ncbi.nlm.nih.gov/31588614/",
        },
  {
        IngName: "2-ethylhexyl ester of 2-cyano-3,3-diphenyl acrylic acid",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Octocrylene is associated with no proven health risks. This ingredient may cause mild skin irritation or allergy in individuals with sensitive skin.",
        Links: "https://pubmed.ncbi.nlm.nih.gov/31588614/, https://pubmed.ncbi.nlm.nih.gov/31588614/",
        },
  {
        IngName: "3,3,5-trimethyl-cyclohexyl-salicylate",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Homosalate is associated with no proven health risks. This ingredient is highly toxic to marine organisms. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
        Links: "https://pubmed.ncbi.nlm.nih.gov/12107642/, https://pubmed.ncbi.nlm.nih.gov/28798318/",
        },
  {
        IngName: "Avobenzone",
        Goal: "UV protection",
        GlutFree: "gluten free",
        Vegan: "vegan",
        EcoFriendly: "not eco friendly",
        Category: "Average",
        Summary: "Avobenzone is associated with no proven health risks, but may cause mild skin irritation or allergy in individuals with sensitive skin. Studies indicate this ingredient may be harmful to marine life but there is insufficient data to prove this effect.",
        Links: "https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5306",
        },
  {
          IngName: "Benzophenone-3",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Oxybenzone is detrimental to marine life and has been banned in some regions due to this effect. This ingredient is associated with no proven health risks.",
          Links: "https://link.springer.com/article/10.1007/s00244-015-0227-11, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5306",
        },
        {
          IngName: "BP-3",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Oxybenzone is detrimental to marine life and has been banned in some regions due to this effect. This ingredient is associated with no proven health risks.",
          Links: "https://link.springer.com/article/10.1007/s00244-015-0227-11, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5305",
        },
        {
          IngName: "Butyl Methoxydibenzoylmethane",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Avobenzone is associated with no proven health risks, but may cause mild skin irritation or allergy in individuals with sensitive skin. Studies indicate this ingredient may be harmful to marine life but there is insufficient data to prove this effect.",
          Links: "https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5306",
        },
        {
          IngName: "butylmethoxydibenzoylmethane",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Avobenzone is associated with no proven health risks, but may cause mild skin irritation or allergy in individuals with sensitive skin. Studies indicate this ingredient may be harmful to marine life but there is insufficient data to prove this effect.",
          Links: "https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5306/",
        },
        {
          IngName: "HMS",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Homosalate is associated with no proven health risks. This ingredient is highly toxic to marine organisms. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/12107642/, https://pubmed.ncbi.nlm.nih.gov/28798318/",
        },
        {
          IngName: "Homomenthyl salicylate",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Homosalate is associated with no proven health risks. This ingredient is highly toxic to marine organisms. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/12107642/, https://pubmed.ncbi.nlm.nih.gov/28798318/",
        },
        {
          IngName: "HS",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Homosalate is associated with no proven health risks. This ingredient is highly toxic to marine organisms. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/12107642/, https://pubmed.ncbi.nlm.nih.gov/28798318/",
        },
        {
          IngName: "Monopropylene Glycol",
          Goal: "a solvent",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Monopropylene Glycol is a solvent, which is an ingredient used to improve the texture and stability of the product. This ingredient is associated with no proven health risks when used in cosmetics.",
          Links: "https://www.cir-safety.org/",
        },
        {
          IngName: "Octinoxate",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Octinoxate is detrimental to marine life and has been banned in some regions due to this effect. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/15191542/, https://pubmed.ncbi.nlm.nih.gov/33537395/, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5301",
        },
        {
          IngName: "Octocrylene",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Octocrylene is associated with no proven health risks. This ingredient may cause mild skin irritation or allergy in individuals with sensitive skin.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/31588614/, https://pubmed.ncbi.nlm.nih.gov/31588614/",
        },
        {
          IngName: "Octyl-methoxycinnamate",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Octinoxate is detrimental to marine life and has been banned in some regions due to this effect. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/15191542/, https://pubmed.ncbi.nlm.nih.gov/33537395/, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5303",
        },
        {
          IngName: "OMC",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Octinoxate is detrimental to marine life and has been banned in some regions due to this effect. Data indicates a low risk of hormone disruption, but this has not been proven in humans.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/15191542/, https://pubmed.ncbi.nlm.nih.gov/33537395/, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5306",
        },
        {
          IngName: "Oxybenzone",
          Goal: "UV protection",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Oxybenzone is detrimental to marine life and has been banned in some regions due to this effect. This ingredient is associated with no proven health risks.",
          Links: "https://link.springer.com/article/10.1007/s00244-015-0227-11, https://www.mauicounty.gov/DocumentCenter/View/130826/Ord-5302",
        },
        {
          IngName: "Propylene Glycol",
          Goal: "Solvent",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Propylene Glycol is a solvent, which is an ingredient used to improve the texture and stability of the product. This ingredient is associated with no proven health risks when used in cosmetics.",
          Links: "https://www.cir-safety.org/"
        },
        {
          IngName: "Tripropylene Glycol",
          Goal: "Solvent",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Tripropylene Glycol is a solvent, which is an ingredient used to improve the texture and stability of the product. This ingredient is associated with no proven health risks when used in cosmetics.",
          Links: "https://www.cir-safety.org/"
        },                  
        {
          IngName: "Water",
          Goal: "Solvent",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Water is a safe and effective solvent commonly used in cosmetics.",
          Links: "https://pubchem.ncbi.nlm.nih.gov/compound/962"
        },
        {
          IngName: "limonene",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Limonene is generally safe for use in cosmetics, but can cause skin irritation in some people.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "linalool",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Linalool is generally safe for use in cosmetics, but can cause skin irritation in some people.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "citronellol",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Citronellol is generally safe for use in cosmetics, but can cause skin irritation in some people. It is also toxic to some aquatic organisms.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "geraniol",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Geraniol is generally safe for use in cosmetics, but can cause skin irritation in some people.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "coumarin",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Coumarin is generally safe for use in cosmetics, but can cause skin irritation in some people.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "hexyl cinnamal",
          Goal: "Fragrance",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "not eco friendly",
          Category: "Average",
          Summary: "Hexyl cinnamal can cause skin irritation and is toxic to some aquatic organisms.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Triethanolamine",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Unsafe",
          Summary: "Triethanolamine is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Diethanolamine",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Diethanolamine is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "DEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "DEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "TEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "TEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Cocamide DEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Cocamide DEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Cocamide MEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Cocamide MEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "DEA-cetyl phosphate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "DEA-cetyl phosphate is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "DEA oleth-3 phosphate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "DEA oleth-3 phosphate is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Lauramide DEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Lauramide DEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Linoleamide MEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Linoleamide MEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Myristamide DEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Myristamide DEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Oleamide DEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Oleamide DEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Stearamide MEA",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Stearmide MEA is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Glycerin",
          Goal: "Humectant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Glycerin is a moisturizer. This ingredient pulls water from the air and uses it to keep skin hydrated. This ingredient is safe to use.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/31840548/"
        },
        {
          IngName: "Cocamidopropyl betaine",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Cocamidopropyl betaine is included to imrpove the texture and stability of the product. This ingredient has the potential to cause irritation, especially in those with sensitive skin.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/31840548/"
        },
        {
          IngName: "Disodium Laureth Sulfosuccinate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "not eco friendly",
          Category: "Good",
          Summary: "Disodium Laureth Sulfosuccinate is included to imrpove the texture and stability of the product. This ingredient is generally gentle and non-irritating.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/26362121/"
        },
        {
          IngName: "Sodium Cocoamphoacetate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Sodium Cocoamphoacetate is included to imrpove the texture and stability of the product. This ingredient is generally gentle and non-irritating.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/20920412/"
        },
        {
          IngName: "Panthenol",
          Goal: "Humectant, anti-inflammatory",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Panthenol is included to to reduce imflammation in the skin as well as provide moisture. This ingredient is generally gentle and non-irritating. This ingredient can be derived either from plants or animals, and is not strictly vegan.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/21982351/"
        },
        {
          IngName: "Niacinamide",
          Goal: "Skin-brightener, anti-inflammatory",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Good",
          Summary: "Niacinamide can improve skin texture and brighten skin tone. This ingredient also has antimicrobial properties, which can prevent breakouts. This ingredient is safe to use and should not cause irritation when used as directed.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/24993939/"
        },
        {
          IngName: "Pantolactone",
          Goal: "Humectant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Pantolactone is included in formulations to provide moisture to the skin. This ingredient has limited available testing data and may cause irritation, especially in those with sensitive skin.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/35946606/"
        },
        {
          IngName: "Citric acid",
          Goal: "Exfoliant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Average",
          Summary: "Citric acid is a chemical exfoliant used to remove dead skin cells from the face. This ingredient may cause irritation, especially in those with sensitive skin.",
          Links: "https://pubmed.ncbi.nlm.nih.gov/35946606/"
        },
        {
          IngName: "TEA-lauryl sulfate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "TEA-lauryl sulfate is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Formaldehyde",
          Goal: "Preservative",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "not eco friendly",
          Category: "Unsafe",
          Summary: "Formaldehyde is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "PPG",
          Goal: "Solvent",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "PPG is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Polysorbate",
          Goal: "Surfactant",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Polysorbate is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Cadmium",
          Goal: "Pigment",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "not eco friendly",
          Category: "Unsafe",
          Summary: "Cadmium is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Lead",
          Goal: "Pigment",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Lead is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        },
        {
          IngName: "Silica",
          Goal: "Solvent",
          GlutFree: "gluten free",
          Vegan: "not vegan",
          EcoFriendly: "eco friendly",
          Category: "Unsafe",
          Summary: "Silica is a potential skin irritant and carcinogen. Products with this ingredient should be avoided whenever possible.",
          Links: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048826/"
        }      
  
      // Add more objects as needed
    ]);
  
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);
  
    const filteredData = data.filter(
      (item) => item.IngName.toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1
    );
  
    return (
      <SafeAreaView>
        <SearchBar
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          setClicked={setClicked}
        />
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <View style={styles.container5}>
              <Text style={{ fontWeight: 'bold' }}>{item.IngName}</Text>
              <Text>{item.Goal}</Text>
              <Text>{item.GlutFree}</Text>
              <Text>{item.Vegan}</Text>
              <Text>{item.EcoFriendly}</Text>
              <Text>{item.Category}</Text>          
              <Text>{item.Summary}</Text>
              {item.Links.split(',').map((link, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => Linking.openURL(link.trim())}
      >
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          {link.trim()}
        </Text>
      </TouchableOpacity>
    ))}
              <Separator />
            </View>
          )}
          keyExtractor={(item) => item.IngName}
        />
      </SafeAreaView>
    );
  }

  export default SearchIngredients;