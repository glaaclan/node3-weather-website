/*
/////////// Hello express
const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/weather", (req, res) => {
  res.send("Your weather");
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Serving up HTML and JSON
const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
    },
    {
      name: "Sarah",
    },
  ]);
});

//
// Goal: Update routes
//
// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
// - Object with forecast and location strings
// 3. Test your work by visiting both in the browser

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Serving up Static Assets
const path = require('path')
const express = require("express");

const app = express();

const publicDiretoryPAth = path.join(__dirname, '../public')
app.use(express.static(publicDiretoryPAth))

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
    },
    {
      name: "Sarah",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Serving up Static Assets
const path = require('path')
const express = require("express");

const app = express();

const publicDiretoryPAth = path.join(__dirname, '../public')
app.use(express.static(publicDiretoryPAth))

// 
// Goal: Create two more HTML files
// 
// 1. Create a html page for about with "About" title
// 2. Create a html page for help with "Help" title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to tests your work

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//SServing up CSS, JS, Images, and More
const path = require('path')
const express = require("express");

const app = express();

const publicDiretoryPAth = path.join(__dirname, '../public')
app.use(express.static(publicDiretoryPAth))

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Dynamic Pages with Templating
const path = require('path')
const express = require("express");

const app = express();
const publicDiretoryPAth = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Dynamic Pages with Templating
const path = require('path')
const express = require("express");

const app = express();
const publicDiretoryPAth = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.'
  })
})

// 
// Goal: Create a template for help page
// 
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Advanced Templating
const path = require('path')
const express = require("express");
const hbs = require('hbs')

// 
// Goal: Create a partial for the footer
// 
// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

const app = express();

// Define paths for Express config
const publicDiretoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//Advanced Templating
const path = require('path')
const express = require("express");
const hbs = require('hbs')

// 
// Goal: Create a partial for the footer
// 
// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

const app = express();

// Define paths for Express config
const publicDiretoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//404 pages
const path = require('path')
const express = require("express");
const hbs = require('hbs')

const app = express();

// Define paths for Express config
const publicDiretoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
  })
})

// 
// Goal: Create and render a 404 page with handlebars
// 
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 routes
//  - Page not found
//  - Help article not found
// 4. Test your work. Visit /what and help/units

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

/////////////////////////////////////
//The Query String
const path = require('path')
const express = require("express");
const hbs = require('hbs')

const app = express();

// Define paths for Express config
const publicDiretoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    })
  }

  res.send({
    forecast: "It is snowing",
    location: "Philadelphia",
    address: req.query.address
  });
});

// 
// Goal: Update weather endpoint to accept address
// 
// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
// -Add address property onto JSON which returns the provided address
// 3. Test /weather and /weather?address=philadelphia

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
*/
/////////////////////////////////////
//ES6 Aside: Default Function Parameters
const path = require('path')
const express = require("express");
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDiretoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiretoryPAth))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Mead'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Andrew Mead'
  })
})

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({error})
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })

})

// 
// Goal: Wire up/weather
// 
// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get forecast
// 4. Send back the real forecast and location

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }

  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
  })
})

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

