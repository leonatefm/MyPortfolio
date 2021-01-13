import * as React from 'react';

const icons = {
  email: (
    <svg
      className='icon-email'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Email icon</title>
      <path d='M831.936 768L192 768.192V378.304l302.816 192.704a32.096 32.096 0 0 0 34.4 0L832 378.304 831.936 768zM192 255.776L192.096 256 832 255.776v46.656l-320 203.616L192 302.432V255.776zM831.936 192H192.096A64 64 0 0 0 128 255.776v512.416C128 803.36 156.768 832 192.096 832h639.84A64 64 0 0 0 896 768.192V255.776A64 64 0 0 0 831.936 192z' />
    </svg>
  ),
  github: (
    <svg
      className='icon-github'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Github icon</title>
      <path d='M12 1.49986C6.20156 1.49986 1.5 6.3233 1.5 12.267C1.5 17.0249 4.50937 21.0561 8.68125 22.4811C8.73976 22.4938 8.79949 22.5001 8.85937 22.4998C9.24843 22.4998 9.39843 22.2139 9.39843 21.9655C9.39843 21.7077 9.38906 21.0327 9.38437 20.1327C9.03705 20.2141 8.68173 20.2565 8.325 20.2592C6.30469 20.2592 5.84531 18.6889 5.84531 18.6889C5.36719 17.4467 4.67812 17.1139 4.67812 17.1139C3.76406 16.4717 4.67344 16.453 4.74375 16.453H4.74844C5.80312 16.5467 6.35625 17.5686 6.35625 17.5686C6.88125 18.4874 7.58437 18.7452 8.2125 18.7452C8.62783 18.7369 9.03673 18.641 9.4125 18.4639C9.50625 17.7702 9.77812 17.2967 10.0781 17.0249C7.74843 16.753 5.29687 15.8295 5.29687 11.7045C5.29687 10.528 5.70469 9.56704 6.375 8.81705C6.26718 8.54517 5.90625 7.4483 6.47812 5.96705C6.55483 5.94869 6.63367 5.94081 6.7125 5.94361C7.09218 5.94361 7.95 6.08892 9.36562 7.0733C11.0857 6.59204 12.9049 6.59204 14.625 7.0733C16.0406 6.08892 16.8984 5.94361 17.2781 5.94361C17.3569 5.94081 17.4358 5.94869 17.5125 5.96705C18.0844 7.4483 17.7234 8.54517 17.6156 8.81705C18.2859 9.57173 18.6937 10.5327 18.6937 11.7045C18.6937 15.8389 16.2375 16.7483 13.8984 17.0155C14.2734 17.3483 14.6109 18.0045 14.6109 19.0077C14.6109 20.4467 14.5969 21.6092 14.5969 21.9608C14.5969 22.2139 14.7422 22.4998 15.1312 22.4998C15.1942 22.5001 15.2571 22.4938 15.3187 22.4811C19.4953 21.0561 22.5 17.0202 22.5 12.267C22.5 6.3233 17.7984 1.49986 12 1.49986Z' />
    </svg>
  ),
  instagram: (
    <svg
      className='icon-instagram'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Instagram icon</title>
      <path d='M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z' />
    </svg>
  ),
  linkedin: (
    <svg
      className='icon-linkedin'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>LinkedIn icon</title>
      <path d='M20.8205 1.50066H3.29437C2.33672 1.50066 1.5 2.18972 1.5 3.13612V20.7011C1.5 21.6527 2.33672 22.5006 3.29437 22.5006H20.8153C21.7781 22.5006 22.5 21.6471 22.5 20.7011V3.13612C22.5056 2.18972 21.7781 1.50066 20.8205 1.50066ZM8.00953 19.0052H5.00109V9.65128H8.00953V19.0052ZM6.60937 8.22909H6.58781C5.625 8.22909 5.00156 7.51237 5.00156 6.61518C5.00156 5.70159 5.6414 5.00175 6.62578 5.00175C7.61015 5.00175 8.2125 5.69643 8.23406 6.61518C8.23359 7.51237 7.61015 8.22909 6.60937 8.22909ZM19.0045 19.0052H15.9961V13.8906C15.9961 12.6653 15.5583 11.8282 14.4698 11.8282C13.6383 11.8282 13.1461 12.3907 12.9272 12.9386C12.8451 13.1355 12.8231 13.4036 12.8231 13.6774V19.0052H9.81468V9.65128H12.8231V10.953C13.2609 10.3296 13.9448 9.43237 15.5362 9.43237C17.5111 9.43237 19.005 10.7341 19.005 13.5405L19.0045 19.0052Z' />
    </svg>
  ),
  menu: (
    <svg
      className='icon-menu'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu icon</title>
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z' />
    </svg>
  ),
  twitter: (
    <svg
      className='icon-twitter'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Twitter icon</title>
      <path d='M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z' />
    </svg>
  ),
  weibo: (
    <svg
      className='icon-weibo'
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Weibo icon</title>
      <path d='m457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109s-68.4-42.3-106-34.3c-15.4 3.3-25.2 18.4-21.9 33.8 3.3 15.3 18.4 25.2 33.8 21.8 18.4-3.9 38.3 1.8 51.9 16.7 13.5 15 17.2 35.4 11.3 53.3-4.9 15.1 3.2 31.1 18.2 36z' />
      <path d='m885.1 237.5c-56.7-62.9-140.4-86.9-217.7-70.5-17.9 3.8-29.3 21.4-25.4 39.3 3.8 17.9 21.4 29.3 39.3 25.5 55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zm-156.1 261.5c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6-81.4 81.5-128.7 167.9-128.7 242.6 0 142.9 183.2 229.8 362.5 229.8 235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zm-286 311.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4 9.2 93.9-99.2 181.5-242.2 195.7z' />
    </svg>
  ),
};

export default icons;
