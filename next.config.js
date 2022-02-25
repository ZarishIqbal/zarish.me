/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	images: {
		domains: ['img.icons8.com', 'tailwindui.com'],
		basePath: '/src',
		dangerouslyAllowSVG: true
	}
}

module.exports = nextConfig
