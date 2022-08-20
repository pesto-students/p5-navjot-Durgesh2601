# How a browser renders an url entered by user

A web browser is a utility or an interface which helps user to access data which is there on remote servers.

## What happens when we enter an URL in the browser ?
1. So whenever we enter URL url its first part is 'https' or 'http' 'ftp etc. This basically tells the browser which protocol it should use.
 ##### What's a protocol ?
A protocol is a set of rules that browser use for communication over the network. When we talk about 'https' it's just a secure version, i.e. information is exchanged in a secure way.

2. The second part of an URL is `www.example.com` is a domain name. It is an sddress of website. We use it to reach to the server that is responsible for serving the information for that website. It given a unique identity to your website in such a huge web world.

3. After hitting the URL, the first thing that needs to happen is to resolve IP address associated with the domain name. DNS helps in resolving this. DNS is like a phone book and helps us to provide the IP address that is associated with the domain just like our phone book gives a mobile number associated with the person's name.

4. After that the browser cache is checked and the browser initiates a TCP connection with the server and send an HTTP request to the server.

5. Then the server handles the incoming request and sends an HTTP response. Based on the response the browser displays the HTML content.
 
## Structure of a web browser
At a high level, all web browsers are composed of 7 parts.
Here are the 7 abstract parts of web browsers:

[![Browser-Structure.jpg](https://i.postimg.cc/Jhn57x4V/Browser-Structure.jpg)](https://postimg.cc/k20bfxbf)

## The Rendering Engine
The Rendering Engine renders content/displays it to the screen. It can render many types of media through the use of plugins or extensions including HTML + CSS, PDFs, and XML documents.

As shown in the image below the Rendering Engine retrieves the Request Resources from the Network Component. Then :
1. HTML is parsed to create the DOM Tree. CSS is parsed to create the CSSOM Tree.
2. DOM Tree + CSSOM Tree = Render Tree. The Render Tree is a tree of styled DOM nodes. It is a tree of boxes complete with their cosmetic characteristics: color, dimensions, etc.
3. Each render-tree node is laid-out.Each render-tree learns its exact positional coordinates on the tree.
4. The Render Tree is traversed. Each node is painted onto the screen using the UI Backend.
5. The rendering process is gradual, asynchronous process. For a better experience, the rendering engine will attempt to render content asap. That means it won't wait untill all the requested resources return from the networking component to begin painting render-tree nodes.

[![Rendering-Engine-1.jpg](https://i.postimg.cc/KYBB8WSW/Rendering-Engine-1.jpg)](https://postimg.cc/xkjcstdG)
