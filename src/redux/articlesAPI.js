import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
	tagTypes: ['articles'],
	refetchOnFocus: true,
	reducerPath: 'articleApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://65829e7202f747c83679b79e.mockapi.io/',
	}),
	endpoints: builder => ({
		getArticles: builder.query({
			query: () => `todos`,
			providesTags: ['articles'],
		}),

		addArticle: builder.mutation({
			query: body => ({
				url: 'todos',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['articles'],
		}),

		deleteArticle: builder.mutation({
			query: id => ({
				url: `todos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['articles'],
		}),

		renameArticle: builder.mutation({
			query: body => ({
				url: `todos/${body.id}`,
				method: 'PUT',
				body: { ...body, title: 'RTK IS SO AWESOME!!!' },
			}),
			invalidatesTags: ['articles'],
		}),
	}),
})

export const { useGetArticlesQuery, useAddArticleMutation, useDeleteArticleMutation, useRenameArticleMutation } =
	articleApi
