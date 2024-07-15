import React from "react";

export const Preferences = () => {

  const data = [
    {   id: '1',
        title: 'Authentic Indian Cuisine',
        description: 'We take pride in serving authentic Indian dishes that capture the true essence and flavors of Indian cuisine. Our experienced chefs carefully select high-quality ingredients and use traditional cooking techniques to create dishes that are rich in taste and aroma.',
        image: '/preferencesMob6.png'
      },
      {
        id: '2',
        title: 'Varied Menu Selection',
        description: 'Our extensive menu offers a wide range of options to cater to different tastes and preferences. From vegetarian and vegan dishes to meat and seafood specialties, we have something for everyone. We also provide options for gluten-free and dairy-free diets, ensuring inclusivity.',
        image: '/preferencesMob1.png'
      },
      {
        id: '3',
        title: 'Exceptional Service',
        description: 'We prioritize customer satisfaction and strive to deliver exceptional service at all times. Our staff is friendly, attentive, and well-trained, ensuring a pleasant dining experience for our guests.',
        image: '/preferencesMob2.png'
      },
      {
        id: '4',
        title: 'Inviting Ambience',
        description: 'Our restaurant is designed to create a warm and inviting atmosphere that reflects the vibrant and colorful culture of India. From the decor to the music, every element is carefully curated to transport our customers to the heart of India, allowing them to enjoy not just the food.',
        image: '/preferencesMob3.png'
      },
      {
        id: '5',
        title: 'Attention to Dietary Needs',
        description: 'We understand the importance of catering to various dietary needs and restrictions. Our menu features options that accommodate different dietary preferences, ensuring that every customer can find something delicious to enjoy.',
        image: '/preferencesMob4.png'
      },
      {
        id: '6',
        title: 'Consistent Quality',
        description: ' Customers choose us because they can rely on the consistent quality of our food and service. We maintain high standards in every aspect of our restaurant, from the ingredients we source to the presentation of our dishes, ensuring a memorable and enjoyable experience with each visit.',
        image: '/preferencesMob5.png'
      },
      
  ]  
  return (
    <section className="mt-[90px] pb-[80px]" id="preferences">
      <div className="container">
        <h2 className="text-2xl text-center text-textLight font-lobster lg:text-4xl">
          Why do customers choose us?
        </h2>
        <ul className="mt-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[24px] lg:gap-x-[30px] lg:gap-y-[60px] lg:grid-cols-3 lg:mt-[80px]">
        {data.map(artic => <li key={artic.id} className="relative flex flex-col justify-center items-center lg:items-start lg:justify-start lg:p-[12px] lg:border lg:min-w-[404px]">
            <img src={artic.image} alt="" className="mb-[12px] lg:hidden"/>
            <div className="lg:flex lg:text-left lg:items-center">
            <span className="hidden lg:block mr-3 text-4xl text-orange-400">{`${artic.id}. `}</span>
            <h3 className="text-xs text-center lg:text-left lg:text-xl text-textLight">{artic.title}</h3>
            </div>
            
            <p className="hidden lg:block mt-[23px] text-base text-textLight">{artic.description}</p>
        </li>)}
        </ul>
      </div>
    </section>
  );
};
