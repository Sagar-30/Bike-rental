import './rentmodule.css'

import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';

export default function Rentmodule(){ 
const [data , setdata ] = useState([
    {"id":1,"img":"https://5.imimg.com/data5/SELLER/Default/2021/5/RU/XV/NK/26617893/white-520x420.jpg","title":"Maruti Suzuki Access","price":600,"description":"The Maruti Suzuki Access is a comfortable and stylish scooter designed for city rides. With a sleek design and efficient performance, it's a perfect choice for your daily commute. The scooter has been well-maintained and has a low mileage of less than 5,000 km.","kmDriven":"Less than 5,000 km"}, 
    {"id":2,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 10,000 km.","kmDriven":"Less than 10,000 km"},
    {"id":3,"img":"https://5.imimg.com/data5/SELLER/Default/2022/9/KJ/EW/NG/4954/honda-activa-6g.png","title":"Honda Activa","price":700,"description":"The Honda Activa is a popular choice for both city and suburban commuting. Known for its durability and performance, it offers a smooth and comfortable ride. This scooter has been gently used with a mileage of less than 8,000 km.","kmDriven":"Less than 8,000 km"},
    {"id":4,"img":"https://myelectrikbike.com/admin/students_imgs/Ather-450x-gen-3-Black-Color.png","title":"Ather 450","price":750,"description":"The Ather 450 is an electric scooter with advanced features and technology. It's an eco-friendly option for urban commuters. The scooter has low mileage, with less than 3,000 km on the odometer.","kmDriven":"Less than 3,000 km"},
    {"id":5,"img":"https://5.imimg.com/data5/OJ/SF/MY-62257317/blue-honda-motor-scooty-500x500.jpg","title":"Honda Activa 3g","price":750,"description":"The Honda Activa 3g is a classic choice with a reliable performance history. It offers a comfortable and smooth ride for your daily commutes. This scooter has a mileage of less than 15,000 km.","kmDriven":"Less than 15,000 km"},
    {"id":6,"img":"https://www.bikingdirect.com/wp-content/uploads/2022/04/MGB-E3-1200w-1200w-White-2.jpg","title":"MGB EV","price":900,"description":"The MGB EV is an electric scooter with a powerful motor designed for longer rides. It combines style and performance, making it a great choice for those who seek adventure. The scooter has a low mileage of less than 2,000 km.","kmDriven":"Less than 2,000 km"},
    {"id":7,"img":"https://5.imimg.com/data5/SELLER/Default/2021/5/RU/XV/NK/26617893/white-520x420.jpg","title":"Maruti Suzuki Access","price":600,"description":"The Maruti Suzuki Access is a comfortable and stylish scooter designed for city rides. With a sleek design and efficient performance, it's a perfect choice for your daily commute. The scooter has been well-maintained and has a low mileage of less than 6,000 km.","kmDriven":"Less than 6,000 km"},
    {"id":8,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 12,000 km.","kmDriven":"Less than 12,000 km"},
    {"id":9,"img":"https://5.imimg.com/data5/SELLER/Default/2022/9/KJ/EW/NG/4954/honda-activa-6g.png","title":"Honda Activa","price":700,"description":"The Honda Activa is a popular choice for both city and suburban commuting. Known for its durability and performance, it offers a smooth and comfortable ride. This scooter has been gently used with a mileage of less than 7,000 km.","kmDriven":"Less than 7,000 km"},
    {"id":10,"img":"https://myelectrikbike.com/admin/students_imgs/Ather-450x-gen-3-Black-Color.png","title":"Ather 450","price":750,"description":"The Ather 450 is an electric scooter with advanced features and technology. It's an eco-friendly option for urban commuters. The scooter has low mileage, with less than 4,000 km on the odometer.","kmDriven":"Less than 4,000 km"},
    {"id":11,"img":"https://5.imimg.com/data5/OJ/SF/MY-62257317/blue-honda-motor-scooty-500x500.jpg","title":"Honda Activa 3g","price":750,"description":"The Honda Activa 3g is a classic choice with a reliable performance history. It offers a comfortable and smooth ride for your daily commutes. This scooter has a mileage of less than 9,000 km.","kmDriven":"Less than 9,000 km"},
    {"id":12,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 10,000 km.","kmDriven":"Less than 10,000 km"},
    {"id":13,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 10,000 km.","kmDriven":"Less than 10,000 km"},
    {"id":14,"img":"https://5.imimg.com/data5/SELLER/Default/2022/9/KJ/EW/NG/4954/honda-activa-6g.png","title":"Honda Activa","price":700,"description":"The Honda Activa is a popular choice for both city and suburban commuting. Known for its durability and performance, it offers a smooth and comfortable ride. This scooter has been gently used with a mileage of less than 8,000 km.","kmDriven":"Less than 8,000 km"},
    {"id":15,"img":"https://myelectrikbike.com/admin/students_imgs/Ather-450x-gen-3-Black-Color.png","title":"Ather 450","price":750,"description":"The Ather 450 is an electric scooter with advanced features and technology. It's an eco-friendly option for urban commuters. The scooter has low mileage, with less than 3,000 km on the odometer.","kmDriven":"Less than 3,000 km"},
    {"id":16,"img":"https://5.imimg.com/data5/OJ/SF/MY-62257317/blue-honda-motor-scooty-500x500.jpg","title":"Honda Activa 3g","price":750,"description":"The Honda Activa 3g is a classic choice with a reliable performance history. It offers a comfortable and smooth ride for your daily commutes. This scooter has a mileage of less than 15,000 km.","kmDriven":"Less than 15,000 km"},
    {"id":17,"img":"https://www.bikingdirect.com/wp-content/uploads/2022/04/MGB-E3-1200w-1200w-White-2.jpg","title":"MGB EV","price":900,"description":"The MGB EV is an electric scooter with a powerful motor designed for longer rides. It combines style and performance, making it a great choice for those who seek adventure. The scooter has a low mileage of less than 2,000 km.","kmDriven":"Less than 2,000 km"},
    {"id":18,"img":"https://5.imimg.com/data5/SELLER/Default/2021/5/RU/XV/NK/26617893/white-520x420.jpg","title":"Maruti Suzuki Access","price":600,"description":"The Maruti Suzuki Access is a comfortable and stylish scooter designed for city rides. With a sleek design and efficient performance, it's a perfect choice for your daily commute. The scooter has been well-maintained and has a low mileage of less than 6,000 km.","kmDriven":"Less than 6,000 km"},
    {"id":19,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 12,000 km.","kmDriven":"Less than 12,000 km"},
    {"id":20,"img":"https://5.imimg.com/data5/SELLER/Default/2021/5/RU/XV/NK/26617893/white-520x420.jpg","title":"Maruti Suzuki Access","price":600,"description":"The Maruti Suzuki Access is a comfortable and stylish scooter designed for city rides. With a sleek design and efficient performance, it's a perfect choice for your daily commute. The scooter has been well-maintained and has a low mileage of less than 5,000 km.","kmDriven":"Less than 5,000 km"},
    {"id":21,"img":"https://5.imimg.com/data5/VE/BK/MY-60940083/let-27s-500x500.png","title":"Tvs Model","price":550,"description":"The Tvs Model is a reliable and economical two-wheeler, ideal for your daily commutes. It offers great fuel efficiency and a comfortable riding experience. The scooter has been well-maintained and has a mileage of less than 10,000 km.","kmDriven":"Less than 10,000 km"},
    {"id":22,"img":"https://5.imimg.com/data5/SELLER/Default/2022/9/KJ/EW/NG/4954/honda-activa-6g.png","title":"Honda Activa","price":700,"description":"The Honda Activa is a popular choice for both city and suburban commuting. Known for its durability and performance, it offers a smooth and comfortable ride. This scooter has been gently used with a mileage of less than 8,000 km.","kmDriven":"Less than 8,000 km"},
    {"id":23,"img":"https://myelectrikbike.com/admin/students_imgs/Ather-450x-gen-3-Black-Color.png","title":"Ather 450","price":750,"description":"The Ather 450 is an electric scooter with advanced features and technology. It's an eco-friendly option for urban commuters. The scooter has low mileage, with less than 3,000 km on the odometer.","kmDriven":"Less than 3,000 km"},
    {"id":24,"img":"https://5.imimg.com/data5/OJ/SF/MY-62257317/blue-honda-motor-scooty-500x500.jpg","title":"Honda Activa 3g","price":750,"description":"The Honda Activa 3g is a classic choice with a reliable performance history. It offers a comfortable and smooth ride for your daily commutes. This scooter has a mileage of less than 15,000 km.","kmDriven":"Less than 15,000 km"},
  ]);
const [idval , setidval] = useState('1');
const [booking, setbooking] = useState('');
  const [fromDate, setfromDate] = useState('');
  const [toDate, settoDate] = useState('');
  const [Name, setName] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');

function HandleBook(e){ 
    setidval(e.target.value)
    setbooking(true);
}
  function handleFromDate(e){
      setfromDate(e.target.value)
  }
  function handleToDate(e){
        settoDate(e.target.value)
  }
  function HandleName(e){
        setName(e.target.value)
  }
  function HandleEmail(e){
        setemail(e.target.value)
  }
  function HandleNumber(e){
        setnumber(e.target.value)
  }
  function handlePayment(){
   if(booking==='' || fromDate==='' || toDate==='' || Name==='' || email==='' || number===''){
     alert('Please fill All mendatory Fields')
   }
    else{
    alert("Payment Successfull")
    setbooking(false);
    }
  }
return(

    <>
   
<section className='Rent-module-top'>
<div className='Rent-module-top-left'>
<p>The best <b>Two Wheeler for you</b></p>
{/* <button>Book Now</button> */}
</div>
<div className='Rent-module-top-right'>
<img src='https://c4.wallpaperflare.com/wallpaper/601/689/220/ducati-black-848-evo-wallpaper-preview.jpg' alt='bike' />
</div>
</section>

<section className='Rent-module-bottom'>
<div className='Rent-module-bottom-top-section'>
<h5>Available Vehicles</h5>
</div>
<div className='Rent-module-bottom-bottom-section'>
{
data.map(alldata=>(
    <div className="rent-section-main-card" key={alldata.id} >
    <div className="rent-card-img-section">
    <img src={alldata.img} alt="Bike"/>
    </div>
    <div className="rent-card-text-section">
    <h3>Model: {alldata.title}</h3>
    <p>Price: ₹ {alldata.price}/day</p>
    <button onClick={HandleBook} value={alldata.id}>Book Now</button>
    </div>
    </div>
    ))
}
</div>
</section>
<Modal
        show={booking}
        onHide={() => setbooking(false)}
        dialogClassName="custom-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Book A Happy Ride Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="rent-section-model-body">
        <img src={data[idval-1].img} />
    <h2>Name: {data[idval-1].title}</h2>
    <p><b>Description:</b> {data[idval-1].description}</p>
    <p><b>Km Driven:</b> {data[idval-1].kmDriven}</p>
    <p><b>Price:</b> ₹ {data[idval-1].price}/day</p>
          <div className='rent-section-form-MainBody'>
        <form className='rent-section-form'>
    <label for="FromDate">From Date: </label>
    <input type='datetime-local' id='FromDate' onBlur={handleFromDate}/> 
    <label for="ToDate">To Date: </label>
    <input type='datetime-local' id='ToDate' onBlur={handleToDate}/>
    <label for="Name">Full Name:</label>
    <input type='text' id='Name' placeholder='Full Name' onKeyUp={HandleName}/>
     <label for="Email">Email:</label> 
    <input type='email' id='Email' placeholder='user@gmail.com' onKeyUp={HandleEmail} />
    <label for="Mobile">Contact No:</label>
    <input type='number' id='Number' placeholder='+91-1234' onKeyUp={HandleNumber}/>
    </form> 
          </div>
      <button type='submit' onClick={handlePayment}>Pay now</button>
        </Modal.Body>
      </Modal>

</>
)
}

