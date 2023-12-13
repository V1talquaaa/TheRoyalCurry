import React from "react";

export const Preferences = () => {

  const data = [
    {   id: '1',
        title: 'Authentic Indian Cuisine:',
        description: 'We take pride in serving authentic Indian dishes that capture the true essence and flavors of Indian cuisine. Our experienced chefs carefully select high-quality ingredients and use traditional cooking techniques to create dishes that are rich in taste and aroma.'
      },
      {
        id: '2',
        title: 'Varied Menu Selection:',
        description: 'Our extensive menu offers a wide range of options to cater to different tastes and preferences. From vegetarian and vegan dishes to meat and seafood specialties, we have something for everyone. We also provide options for gluten-free and dairy-free diets, ensuring inclusivity.'
      },
      {
        id: '3',
        title: 'Exceptional Service:',
        description: 'We prioritize customer satisfaction and strive to deliver exceptional service at all times. Our staff is friendly, attentive, and well-trained, ensuring a pleasant dining experience for our guests.'
      },
      {
        id: '4',
        title: 'Inviting Ambience:',
        description: 'Our restaurant is designed to create a warm and inviting atmosphere that reflects the vibrant and colorful culture of India. From the decor to the music, every element is carefully curated to transport our customers to the heart of India, allowing them to enjoy not just the food.'
      },
      {
        id: '5',
        title: 'Attention to Dietary Needs:',
        description: 'We understand the importance of catering to various dietary needs and restrictions. Our menu features options that accommodate different dietary preferences, ensuring that every customer can find something delicious to enjoy.'
      },
      {
        id: '6',
        title: 'Consistent Quality:',
        description: ' Customers choose us because they can rely on the consistent quality of our food and service. We maintain high standards in every aspect of our restaurant, from the ingredients we source to the presentation of our dishes, ensuring a memorable and enjoyable experience with each visit.'
      },
      
  ]  
  return (
    <section className="mt-[90px] pb-[80px]">
      <div className="container">
        <h2 className="text-center text-textLight font-lobster text-4xl">
          Why do customers choose us?
        </h2>
        <ul className=" mt-[80px] grid gap-x-[30px] gap-y-[60px] grid-cols-3">
        {data.map(artic => <li key={artic.id} className="p-[12px] border min-w-[404px]">
            <h3 className="text-xl text-textLight"><span className="text-4xl text-orange-600">{`${artic.id}. `}</span>{artic.title}</h3>
            <p className=" mt-[23px] text-base text-textLight">{artic.description}</p>
        </li>)}
        </ul>
      </div>
    </section>
  );
};
