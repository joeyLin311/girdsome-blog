/*
 * @Author: your name
 * @Date: 2021-04-10 17:44:19
 * @LastEditTime: 2021-04-13 21:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \girdsome-blog\gridsome.config.js
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
  {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://1.116.105.99:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag', 'latest'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ]
}
// pngguant failed to build, make sure that libpng-dev is installed