function PostDataResolve(PostService){
  return PostService.get();
}
PostDataResolve.$inject = ['post'];

module.exports = PostDataResolve;
