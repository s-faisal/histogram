
/**
 * @author Fasil Shaikh <fasilshaikh@gmail.com>
 * @param {string} string
 * @returns {(Object|String)} Object that has histogram value in desc order or the string that specifies the error.
*/

function generateHistogram(string){
    if(string){
        // Check if the param is passed via code and if it's String
        if(Array.isArray(string)){
            //Convert the same to Array
            string = string.join(" ")                                       
        }

        var histogram = {}
        for(var i=0; i<string.length-1; i++){

            //Checks whether the current and next element has an empty space - This excludes single letters and spaces
            if(string[i]!=" " && string[i+1]!=" "){

                //Generate Pairs and assign appropriate value to them
                var strPair = string.substr(i, 2);
                histogram[strPair] = (histogram[strPair] || 0) + 1;
            }
        }

        /*
            Convert the object of histogram to Array for sorting
            Sorts the array as per the value
            Converts the array back to object using reduce which iterates every element of array and later spread iterates the elements to create object
        */
        histogram = Object.entries(histogram)
        .sort((a, b) => (a[1] > b[1]) ? -1 : 1)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        return histogram;
    }else{
        return "Please enter a string to proceed";
    }
}
console.log(generateHistogram(process.argv.slice(2)))
// console.log(generateHistogram("this is a good thing"))
// console.log(generateHistogram("coooooool"))             //Few of the examples
// console.log(generateHistogram(""))                      //Few of the examples
// console.log(generateHistogram())                        //Few of the examples
