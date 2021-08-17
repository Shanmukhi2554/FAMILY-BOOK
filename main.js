var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.pinimg.com/736x/aa/42/7a/aa427a67d5dc8bc31629fbe50cc62abd.jpg"];
var names = ["Fmaily Book", "Mothe Jayakrishna", "Mothe Bhashini", "Pothuganti Shilpa", "My self"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images
    var updatedImage = images[i] ;
    //Debug the code to store list of names in updatedName. Use names
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}