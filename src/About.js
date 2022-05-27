import React, {Component} from "react";
class About extends Component {
    render() {
      return (
        <div>
          <h1>
            History
          </h1>
            <p>
            React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".[31][32] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[33] It was open-sourced at JSConf US in May 2013.[32]
            </p>
            <p>
            React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.
            </p>
            <p>
            On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[34] React Fiber was to become the foundation of any future improvements and feature development of the React library.[35][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[36] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers", and each can be operated and updated separately, allowing for smoother on-screen rendering
            </p>
        </div>
      );
    }
  }
   
  export default About;