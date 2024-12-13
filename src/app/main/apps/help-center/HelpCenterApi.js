import apiService from 'app/store/apiService';

export const addTagTypes = [
	'help_center_guides',
	'help_center_guides_by_category',
	'help_center_guide',
	'help_center_guide_categories',
	'help_center_faqs',
	'help_center_faqs_by_category',
	'help_center_most_asked_faqs',
	'help_center_faq_categories'
];
const HelpCenterApi = apiService
	.enhanceEndpoints({
		addTagTypes
	})
	.injectEndpoints({
		endpoints: (build) => ({
			getHelpCenterGuides: build.query({
				query: () => ({ url: `/mock-api/help-center/guides` }),
				providesTags: ['help_center_guides']
			}),
			getHelpCenterGuidesByCategory: build.query({
				query: (queryArg) => ({
					url: `/mock-api/help-center/guides/${queryArg.categorySlug}`
				}),
				providesTags: ['help_center_guides_by_category']
			}),
			getHelpCenterGuideByCategory: build.query({
				query: (queryArg) => ({
					url: `/mock-api/help-center/guides/${queryArg.categorySlug}/${queryArg.guideSlug}`
				}),
				providesTags: ['help_center_guide']
			}),
			getHelpCenterGuideCategories: build.query({
				query: () => ({ url: `/mock-api/help-center/guides/categories` }),
				providesTags: ['help_center_guide_categories']
			}),
			getHelpCenterFaqs: build.query({
				query: () => ({ url: `/mock-api/help-center/faqs` }),
				providesTags: ['help_center_faqs']
			}),
			getHelpCenterFaqsByCategory: build.query({
				query: (queryArg) => ({
					url: `/mock-api/help-center/faqs/${queryArg.categorySlug}`
				}),
				providesTags: ['help_center_faqs_by_category']
			}),
			getHelpCenterMostlyFaqs: build.query({
				query: () => ({ url: `/mock-api/help-center/faqs/most-asked` }),
				providesTags: ['help_center_most_asked_faqs']
			}),
			getHelpCenterFaqCategories: build.query({
				query: () => ({ url: `/mock-api/help-center/faqs/categories` }),
				providesTags: ['help_center_faq_categories']
			})
		}),
		overrideExisting: false
	});
export default HelpCenterApi;
export const {
	useGetHelpCenterGuidesQuery,
	useGetHelpCenterGuidesByCategoryQuery,
	useGetHelpCenterGuideByCategoryQuery,
	useGetHelpCenterGuideCategoriesQuery,
	useGetHelpCenterFaqsQuery,
	useGetHelpCenterFaqsByCategoryQuery,
	useGetHelpCenterMostlyFaqsQuery,
	useGetHelpCenterFaqCategoriesQuery
} = HelpCenterApi;
